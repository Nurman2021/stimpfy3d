import CreditsIcon from './icons/CreditsIcon.svelte';
import HomeIcon from './icons/HomeIcon.svelte';
import DocumentationIcon from './icons/DocumentationIcon.svelte';

export const data = [
	{
		section: 'Apps',
		content: [
			{
				title: 'Beranda',
				icon: HomeIcon,
				link: '/'
			}
		]
	},
	{
		section: 'Petunjuk',
		content: [
			{
				title: 'Cara Penggunaan',
				icon: DocumentationIcon,
				link: '/how-to-use'
			},
			{
				title: 'Tentang Stimpfy3D',
				icon: CreditsIcon,
				link: '/about'
			}
		]
	}
];
