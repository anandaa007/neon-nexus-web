
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Custom cyberpunk themed colors
				neon: {
					violet: "#8B5CF6",
					purple: "#7C3AED",
					blue: "#3ABEFF",
					cyan: "#00FFFF",
					pink: "#FF00FF",
					green: "#00FF66",
				},
				cyber: {
					dark: "#0F0F1A",
					darker: "#080812",
					medium: "#2D1B69",
					light: "#4830A6",
				}
			},
			fontFamily: {
				orbitron: ['Orbitron', 'sans-serif'],
				exo: ['Exo 2', 'sans-serif']
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"pulse-neon": {
					'0%, 100%': { 
						opacity: '1',
						filter: 'brightness(1) drop-shadow(0 0 10px var(--neon-color))'
					},
					'50%': { 
						opacity: '0.7',
						filter: 'brightness(0.8) drop-shadow(0 0 5px var(--neon-color))' 
					},
				},
				"float": {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				"glitch": {
					'0%': { transform: 'translate(0)' },
					'20%': { transform: 'translate(-3px, 3px)' },
					'40%': { transform: 'translate(-3px, -3px)' },
					'60%': { transform: 'translate(3px, 3px)' },
					'80%': { transform: 'translate(3px, -3px)' },
					'100%': { transform: 'translate(0)' },
				},
				"scanline": {
					'0%': { transform: 'translateY(0%)' },
					'100%': { transform: 'translateY(100%)' },
				},
				"grid-fade": {
					'0%': { opacity: '0.3' },
					'50%': { opacity: '0.6' },
					'100%': { opacity: '0.3' },
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"pulse-neon": "pulse-neon 2s infinite",
				"float": "float 6s ease-in-out infinite",
				"glitch": "glitch 1s ease-in-out infinite alternate",
				"scanline": "scanline 8s linear infinite",
				"grid-fade": "grid-fade 8s ease-in-out infinite",
			},
			backgroundImage: {
				'cyber-grid': "linear-gradient(to right, rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(139, 92, 246, 0.1) 1px, transparent 1px)",
				'neon-glow': "radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(15, 15, 26, 0) 70%)",
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
