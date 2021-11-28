import*as t from"react";function e(e){var a=t.useState(!e),r=a[0],o=a[1];return{ref:t.useCallback((function(t){t&&o("BUTTON"===t.tagName)}),[]),type:r?"button":void 0}}export{e as useButtonType};
