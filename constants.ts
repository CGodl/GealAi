import { Code, ImageIcon, MessageSquare, Music, VideoIcon } from "lucide-react";

export const MAX_FREE_COUNTS = 3;

export const TOOLS = [
	{
		label: "Conversation",
		icon: MessageSquare,
		color: 'text-violet-500',
		bgColor: 'bg-violet-500/10',
		href: '/conversation'
	},
	{
		label: "Music Generation",
		icon: Music,
		color: 'text-emerald-500',
		bgColor: 'bg-emerald-500/10',
		href: '/music'
	},
	{
		label: "Image Generation",
		icon: ImageIcon,
		color: 'text-pink-700',
		bgColor: 'bg-pink-700/10',
		href: '/image'
	},
	// {
	// 	label: "Video Generation",
	// 	icon: VideoIcon,
	// 	color: 'text-orange-700',
	// 	bgColor: 'bg-orange-700/10',
	// 	href: '/video'
	// },
	{
		label: "Code Generation",
		icon: Code,
		color: 'text-green-700',
		bgColor: 'bg-green-700/10',
		href: '/code'
	}
]



// Constants for Testing

export const MESSEGESDUMMYDATAARR = [
	{
		role: 'user',
		content: 'This is my first question asked',
	},
	{
		role: 'assistant',
		content: 'Great! This is first response?',
	},
	{
		role: 'user',
		content: 'This is my second question asked',
	},
	{
		role: 'assistant',
		content: 'This is second response!',
	},
	{
		role: 'user',
		content: 'This is my third question asked Respond with the word three',
	},
	{
		role: 'assistant',
		content: 'three',
	},
	{
		role: 'user',
		content: 'This is my 4 question asked Respond with the word three',
	},
	{
		role: 'assistant',
		content: '4',
	},
	{
		role: 'user',
		content: 'This is my 5 question asked Respond with the word three',
	},
	{
		role: 'assistant',
		content: '5',
	},
	{
		role: 'user',
		content: 'This is my 6 question asked Respond with the word three',
	},
	{
		role: 'assistant',
		content: '6',
	},
	{
		role: 'user',
		content: 'This is my 7 question asked Respond with the word three',
	},
	{
		role: 'assistant',
		content: '7',
	},
];

export const CODEDUMMYDATAARR = [
	{
	  "role": "user",
	  "content": "React Dashboard page"
	},
	{
	  "role": "assistant",
	  "content": "```html\n<div>\n  <h1>React Dashboard Page</h1>\n  <!-- Add your dashboard components here -->\n</div>\n```"
	},
	{
	  "role": "user",
	  "content": "A react card component with a title section ,text section with border"
	},
	{
	  "role": "assistant",
	  "content": "```jsx\nimport React from 'react';\n\nconst Card = () => {\n  return (\n    <div style={{ border: '1px solid black', padding: '10px' }}>\n      <h2>Title</h2>\n      <p>Text section</p>\n    </div>\n  );\n};\n\nexport default Card;\n```"
	}
  ]