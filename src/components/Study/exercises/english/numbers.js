// English, unit 1: the numbers from 1 to 20, spelt with some letters missing (each `_` in `shown`).

const numbers = {
  slug: 'numbers',
  title: 'Numbers 1 to 20',
  heading: 'Missing letters: 1 to 10',
  type: 'letters',
  write: true, // the letters written by hand
  instructions: 'Write the letters that are missing, one at a time, and tap ✓. Tap 🔊 to hear the number.',
  words: [
    { number: 1, word: 'one', shown: 'o_e' },
    { number: 2, word: 'two', shown: 't_o' },
    { number: 3, word: 'three', shown: 'th_e_' },
    { number: 4, word: 'four', shown: 'f_u_' },
    { number: 5, word: 'five', shown: 'f_v_' },
    { number: 6, word: 'six', shown: 's_x' },
    { number: 7, word: 'seven', shown: 's_v_n' },
    { number: 8, word: 'eight', shown: 'e_gh_' },
    { number: 9, word: 'nine', shown: 'n_n_' },
    { number: 10, word: 'ten', shown: 't_n' },
  ],
  more: [
    {
      title: 'Missing letters: 11 to 20',
      type: 'letters',
      write: true,
      instructions: 'Write the letters that are missing, one at a time, and tap ✓. Tap 🔊 to hear the number.',
      words: [
        { number: 11, word: 'eleven', shown: 'el_v_n' },
        { number: 12, word: 'twelve', shown: 'tw_lv_' },
        { number: 13, word: 'thirteen', shown: 'th_rt_en' },
        { number: 14, word: 'fourteen', shown: 'f_urt_en' },
        { number: 15, word: 'fifteen', shown: 'fi_te_n' },
        { number: 16, word: 'sixteen', shown: 's_xte_n' },
        { number: 17, word: 'seventeen', shown: 's_vent_en' },
        { number: 18, word: 'eighteen', shown: 'ei_hte_n' },
        { number: 19, word: 'nineteen', shown: 'n_net_en' },
        { number: 20, word: 'twenty', shown: 'tw_nt_' },
      ],
    },
  ],
};

export default numbers;
