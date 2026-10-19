'use client';

import {
  lazy, Suspense, useCallback, useEffect, useRef, useState,
} from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

import { rememberLanguage } from '@/i18n';
import { COMMANDS, NameBanner, runCommand } from './commands';
import {
  Window, TitleBar, TitleText, Logo, BarLink, Screen, Line, Muted, Prompt, Cursor, InputLine,
  HiddenInput, Shortcuts, Shortcut,
} from './style';

const BugGame = lazy(() => import('@/components/Header/BugGame'));

const PROMPT = 'javier@garrido:~$';
const BOOT_COMMAND = 'whoami';
const TYPE_MS = 90;
// The commands worth a shortcut; the rest are in `help`.
const SHORTCUTS = COMMANDS.filter(name => !['lang', 'clear'].includes(name));

const reducedMotion = () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
// Only where there is a real keyboard: on a phone, focusing would pop the keyboard over the screen.
const hasKeyboard = () => window.matchMedia?.('(hover: hover) and (pointer: fine)').matches;

function PromptLine({ command }) {
  return (
    <Line>
      <Prompt>{PROMPT}</Prompt>
      {' '}
      {command}
    </Line>
  );
}

// The terminal version of the site: it boots by typing `whoami`, then waits for commands.
export default function Terminal() {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const [entries, setEntries] = useState([]);
  const [booted, setBooted] = useState(false);
  const [typed, setTyped] = useState('');
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [playing, setPlaying] = useState(false);
  const inputRef = useRef(null);
  const endRef = useRef(null);
  const nextId = useRef(0);

  const print = useCallback((command, output) => {
    nextId.current += 1;
    const id = nextId.current;
    setEntries(current => [...current, { id, command, output }]);
  }, []);
  const clearScreen = useCallback(() => setEntries([]), []);

  const execute = useCallback((line) => {
    const { output, action, lang } = runCommand(line, t);
    if (action === 'clear') {
      clearScreen();
      return;
    }
    if (action === 'lang') {
      i18n.changeLanguage(lang);
      rememberLanguage(lang);
      print(line, <Line>{i18n.getFixedT(lang)('terminal.langChanged')}</Line>);
      return;
    }
    print(line, output);
    if (action === 'exit') setTimeout(() => router.push('/'), 600);
    if (action === 'play') setPlaying(true);
  }, [t, i18n, print, clearScreen, router]);

  // Boot: the banner, then `whoami` typed out, then the prompt. Any key or tap skips ahead.
  useEffect(() => {
    let cancelled = false;
    const timers = [];
    const finish = () => {
      if (cancelled) return;
      cancelled = true;
      timers.forEach(clearTimeout);
      window.removeEventListener('keydown', finish);
      window.removeEventListener('pointerdown', finish);
      setTyped('');
      execute(BOOT_COMMAND);
      print(null, <Line><Muted>{t('terminal.hint')}</Muted></Line>);
      setBooted(true);
      if (hasKeyboard()) inputRef.current?.focus();
    };
    print(null, <Line><Muted>{t('terminal.lastLogin', { date: new Date().toDateString() })}</Muted></Line>);
    print(null, <NameBanner />);
    if (reducedMotion()) {
      finish();
      return clearScreen;
    }
    [...BOOT_COMMAND].forEach((_, index) => {
      timers.push(setTimeout(() => setTyped(BOOT_COMMAND.slice(0, index + 1)), 700 + index * TYPE_MS));
    });
    timers.push(setTimeout(finish, 700 + BOOT_COMMAND.length * TYPE_MS + 300));
    window.addEventListener('keydown', finish);
    window.addEventListener('pointerdown', finish);
    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
      window.removeEventListener('keydown', finish);
      window.removeEventListener('pointerdown', finish);
      clearScreen(); // so a boot that React runs twice in development still prints once
    };
    // Runs once: the boot is a one-off, whatever the language does later.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Black page behind it while it is open (see global.css), also after moving here from the site.
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.terminal = '';
    return () => { delete root.dataset.terminal; };
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: 'end' });
  }, [entries, typed]);

  const submit = (event) => {
    event.preventDefault();
    const line = input.trim();
    setInput('');
    setHistoryIndex(-1);
    if (!line) {
      print('', null);
      return;
    }
    setHistory(current => [line, ...current]);
    execute(line);
  };

  const onKeyDown = (event) => {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      event.preventDefault();
      const step = event.key === 'ArrowUp' ? 1 : -1;
      const index = Math.min(Math.max(historyIndex + step, -1), history.length - 1);
      setHistoryIndex(index);
      setInput(index === -1 ? '' : history[index]);
    } else if (event.key === 'Tab') {
      event.preventDefault();
      const match = COMMANDS.find(name => input && name.startsWith(input.toLowerCase()));
      if (match) setInput(match);
    } else if (event.key === 'l' && event.ctrlKey) {
      event.preventDefault();
      clearScreen();
    }
  };

  const runShortcut = (name) => {
    setHistory(current => [name, ...current]);
    execute(name);
  };

  return (
    <Window translate="no">
      <TitleBar>
        <Logo src="/img/terminal/jg.png" alt="" width={32} height={32} />
        <TitleText>{t('terminal.title')}</TitleText>
        <BarLink href="/" onClick={(event) => { event.preventDefault(); execute('exit'); }}>
          [ exit ]
        </BarLink>
      </TitleBar>
      <Screen aria-live="polite" onClick={() => booted && hasKeyboard() && inputRef.current?.focus()}>
        {entries.map(entry => (
          <div key={entry.id}>
            {entry.command !== null && <PromptLine command={entry.command} />}
            {entry.output}
          </div>
        ))}
        {!booted && (
          <Line>
            <Prompt>{PROMPT}</Prompt>
            {' '}
            {typed}
            <Cursor />
          </Line>
        )}
        {booted && (
          <form onSubmit={submit}>
            <InputLine>
              <Prompt>{PROMPT}</Prompt>
              {' '}
              {input}
              <Cursor />
              <HiddenInput
                ref={inputRef}
                value={input}
                onChange={event => setInput(event.target.value)}
                onKeyDown={onKeyDown}
                aria-label={t('terminal.inputLabel')}
                autoComplete="off"
                autoCapitalize="none"
                autoCorrect="off"
                spellCheck={false}
                enterKeyHint="go"
              />
            </InputLine>
          </form>
        )}
        <div ref={endRef} />
      </Screen>
      {booted && (
        <Shortcuts aria-label={t('terminal.shortcuts')}>
          {SHORTCUTS.map(name => (
            <Shortcut key={name} type="button" onClick={() => runShortcut(name)}>{name}</Shortcut>
          ))}
        </Shortcuts>
      )}
      {playing && (
        <Suspense fallback={null}>
          <BugGame onClose={() => setPlaying(false)} />
        </Suspense>
      )}
    </Window>
  );
}
