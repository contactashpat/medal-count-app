# ✅ Medal Count App – TODO & Improvements

This document tracks potential enhancements and technical improvements for future development of the Medal Count Mini App. These improvements aim to make the app more robust, user-friendly, accessible, and production-ready.

---

## 🧠 Logic & Architecture

- [x] ✅ Add unit tests for sorting logic (`sortCountries`)
- [x] ✅ Add tests for `useMedalData` (loading, success, error)
- [x] 🔁 Extract `countryOrder` into `/constants/countryCodes.ts`
- [x] 💡 Add support for ascending/descending toggle when sorting

---

## 🖼 UI/UX Improvements

- [x] ✨ Add medal icons (🥇 🥈 🥉) to column headers
- [x] ✨ Highlight the currently sorted column with background color
- [ ] ✨ Animate table updates when sort changes

---

## 📱 Responsiveness & Accessibility

- [ ] 📱 Improve mobile responsiveness (collapse columns or horizontal scroll)
- [x] ♿ Add keyboard navigation to sortable headers

---

## 🔄 Data & Interactivity

- [ ] 🐢 Simulate network delay with `setTimeout` in data fetch
- [ ] 🔎 Add search/filter bar for country code

---

## 🧪 Developer & Code Quality

- [ ] 🧰 Add ESLint + Prettier for consistent coding style
- [ ] 🔬 Set up Storybook for visual testing of components

---

## 🌓 Advanced Extras (Stretch Goals)

- [x] 🌙 Add dark mode support
- [ ] 🌐 Internationalize app (i18n) with country names and local formats
- [x] 📦 Deploy to Vercel or Netlify or some other cloud

---

## 🚧 Upcoming Features (advanced-ui-3)
- [ ] 🗓 Add year selector with dynamic backend data
- [ ] 🌿 Drill down medal counts to category and participant level
- [ ] 📊 Add charts or visual summary of medal distribution
- [ ] ⏱ Show live medal updates with polling or WebSocket
