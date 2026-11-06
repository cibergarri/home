// Units that are ready but not shown to Julia yet: their pages are there, but the subject's page
// leaves them out of its list until the class gets to them. To show a unit, take it off its
// subject's list.
//
// To see every unit anyway, open any page with ?all (e.g. /julia/mates?all). The browser remembers
// it, so the hidden units stay listed on every page after that; ?all=0 hides them again.
export const HIDDEN_UNITS = {
  mates: ['tema-3', 'tema-4', 'tema-5', 'tema-6', 'tema-7', 'tema-8', 'tema-9'],
  lengua: ['tema-3', 'tema-4', 'tema-5', 'tema-6', 'tema-7', 'tema-8', 'tema-9'],
  english: ['unit-3', 'unit-4', 'unit-5', 'unit-6', 'festivals'],
};

export const isHidden = (subject, unit) => Boolean(HIDDEN_UNITS[subject.slug]?.includes(unit.slug));

const REMEMBERED = 'julia-show-all';

// Whether this browser shows the hidden units: ?all turns it on and ?all=0 off, and either is
// remembered. Storage can be missing (a private window), and then only the address counts.
export const showsAll = (search) => {
  const asked = new URLSearchParams(search).get('all');
  try {
    if (asked !== null) {
      if (asked === '0') window.localStorage.removeItem(REMEMBERED);
      else window.localStorage.setItem(REMEMBERED, '1');
    }
    return window.localStorage.getItem(REMEMBERED) === '1';
  } catch {
    return asked !== null && asked !== '0';
  }
};
