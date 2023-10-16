import type { Config } from 'jest';

const config: Config = {
	testEnvironment: "jest-environment-jsdom",
	transformIgnorePatterns: ['/node_modules/'],
	collectCoverage: true,
	setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
	extensionsToTreatAsEsm: ['.ts', '.tsx'],
	coverageDirectory: "coverage",
	modulePaths: ['<rootDir>/src'],
	testPathIgnorePatterns: ['/node_modules/', '/.next/'],
	collectCoverageFrom: [
		'/src/components/**/test.spec.ts(x)',
		'/src/templates/**/test.spec.ts(x)',
		'!src/app/**', // should be tested in e2e
		'!src/lib/registry.tsx',
		'!src/types/**',
		'!src/styles/**',
		'!src/**/*.stories.tsx',
		'!src/**/types.ts',
		'!src/**/styles.ts',
		'!src/components/index.ts',
	],
	transform: {
		'^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
	},
	moduleNameMapper: {
		'^styled-components': 'styled-components/dist/styled-components.browser.cjs.js',
		'\\.(css|less|sass|scss)$': 'identity-obj-proxy',
	}
};

export default config;
