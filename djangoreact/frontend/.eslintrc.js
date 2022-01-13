module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    // typescript 표준 규칙 모음
    "plugin:import/errors",
    "plugin:import/warnings",
    // import 관련 규칙 모음
    "react-app",
    "plugin:prettier/recommended",
    "prettier",
    // prettier 관련 규칙 모음
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
    // tsconfig 파일의 경로를 참조 해줍니다.
    // 기준은 root 입니다.
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": ["error", { endOfLine: "auto" }],
  },
};
