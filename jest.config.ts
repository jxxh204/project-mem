export default {
  testEnvironment: "jsdom",
  roots: ["<rootDir>/src"],
  moduleDirectories: ["node_modules", "src"],
  // transform: {
  //   "^.+\\.(ts|tsx)$": [
  //     "ts-jest",
  //     {
  //       tsconfig: "<rootDir>/tsconfig.jest.json", // tsconfig.jest.json 사용 설정
  //     },
  //   ],
  //   // babel-jest를 이용하여 javascrit 사용 환경 설정 (cjs파일에서 import 활용 등)
  // },
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        diagnostics: {
          ignoreCodes: [1343],
        },
        astTransformers: {
          before: [
            {
              path: "node_modules/ts-jest-mock-import-meta", // or, alternatively, 'ts-jest-mock-import-meta' directly, without node_modules.
              options: {
                metaObjectReplacement: { url: "https://www.url.com" },
              },
            },
          ],
        },
      },
    ],
  },

  moduleNameMapper: {
    "^.+\\.svg$": "jest-svg-transformer", // <- 새롭게 추가
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "^@/(.*)$": "<rootDir>/src/$1",
    "^component/(.*)$": "<rootDir>/src/components/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};
