<script>
	// import Snippet from './Snippet.svelte';
	// import SvelteIcon from './icons/SvelteIcon.svelte';
	// import FolderIcon from './icons/FolderIcon.svelte';
	// import TsIcon from './icons/TsIcon.svelte';
</script>

<svelte:head>
	<title>Cara Penggunaan</title>
</svelte:head>
<!-- <Doc /> -->

<div class="max-w-full py-8 text-black">
	<h2 class="mb-10 text-3xl font-medium">Not Found</h2>
	<!-- <section class="mb-16 px-3 py-8 md:px-8">
		<h2 class="text-2xl font-medium">Features</h2>
		<ul class="mt-4 list-disc pl-6">
			<li class="mb-4">Support of the active route (styled by default).</li>
			<li class="mb-4">Fully customizable and without external dependencies.</li>
			<li class="mb-4">No vendor lock-in, you can export it and integrate it in your project.</li>
			<li>Sidebar can be aligned left or right according to your preferences (on mobile).</li>
		</ul>
	</section> -->

	<!-- <section class="mb-16 px-3 py-8 md:px-8">
		<h2 class="mb-3 text-2xl font-medium">File Structure</h2>
		<div class="pl-2">
			<div class="mb-3 flex pl-5">
				<span class="pl-2">dashboard</span>
			</div>
			<div class="mb-3 flex pl-11">
				<span class="pl-2">sidebar</span>
			</div>
			<div class="mb-3 flex pl-16">
				<span class="pl-2">icons</span>
			</div>
			<div class="mb-3 flex pl-16">
				<span class="pl-2">data.ts</span>
			</div>
			<div class="mb-3 flex pl-16">
				<span class="pl-2">Sidebar.svelte</span>
			</div>
			<div class="mb-3 flex pl-16">
				<span class="pl-2">SidebarHeader.svelte</span>
			</div>
			<div class="mb-3 flex pl-16">
				<span class="pl-2">SidebarItems.svelte</span>
			</div>
			<div class="mb-3 flex pl-11">
				<span class="pl-2">Layout.svelte</span>
			</div>
			<div class="mb-3 flex pl-11">
				<span class="pl-2">Overlay.svelte</span>
			</div>
			<div class="mb-3 flex pl-11">
				<span class="pl-2">TopBar.svelte</span>
			</div>
			<div class="mb-3 flex pl-11">
				<span class="pl-3">store.ts</span>
			</div>
		</div>
	</section>

	<section class="mb-16 px-3 py-8 md:px-8">
		<h2 class="text-2xl font-medium">File Structure explained</h2>

		<div class="mb-8 mt-4">
			<div class="flex">
				<strong class="px-1">sidebar</strong>
			</div>
			<div class="mt-4 flex flex-wrap pl-6 md:flex-nowrap">
				<span class="px-2 font-medium">icons</span> :
				<p class="pl-1">
					Icons used for each sidebar-item. You don't need this folder if you can provide your own
					icons.
				</p>
			</div>
			<div class="mt-6 flex flex-wrap pl-6 md:flex-nowrap">
				<span class="px-2 font-medium">data.ts</span> :
				<p class="pl-1">
					It's in this file that you will add routes for each sidebar-item. it is an array of
					objects.
				</p>
			</div>
			<div class="mt-8 flex flex-wrap pl-8">
				<div class="md:w-4/12" />
				<ul class="pt-8 md:pl-4 md:pt-20">
					<li class="mb-2">
						<span class="px-1">section :</span> Name of the section
					</li>
					<li class="mb-2">
						<span class="px-1">title :</span> Label for the route
					</li>
					<li class="mb-2">
						<span class="px-1">icon :</span> icon used, imported from
						<strong class="px-1">icons</strong> folder or from your library
					</li>
				</ul>
			</div>
			<div class="mt-6 flex flex-wrap pl-6 md:flex-nowrap">
				<span class="px-2 font-medium">Sidebar.svelte</span> :
				<p class="pl-1">responsable of the sidebar.</p>
				<p class="pl-1">
					compose <strong>SidebarHeader</strong> and{' '}
					<strong>SidebarItems</strong> components.
				</p>
			</div>
			<div class="mt-6 flex flex-wrap pl-6 md:flex-nowrap">
				<span class="px-2 font-medium">SidebarHeader.svelte</span>{' '}
				:
				<p class="pl-1">contains the logo displayed on top of the sidebar</p>
			</div>
			<div class="mt-6 flex flex-wrap pl-6 md:flex-nowrap">
				<span class="px-2 font-medium">SidebarItems.svelte</span> :
				<p class="pl-1">
					automatically generates each sidebar-item according to your routes defined in
					<strong class="px-1">data.ts</strong>
				</p>
			</div>
		</div>

		<div>
			<div class="mt-8 flex flex-wrap md:flex-nowrap">
				<span class="px-1 font-medium">Layout.svelte :</span>{' '}
				contains the
				<strong class="px-1">DashboardLayout</strong>
				component used as the layout of the application
			</div>
		</div>

		<div>
			<div class="mt-8 flex flex-wrap md:flex-nowrap">
				<span class="px-1 font-medium">Overlay.svelte :</span>{' '}
				displays an overlay that will only be visible on small screens to emphasize the focus on sidebar
				when it is open. it's also used to close sidebar on click outside
			</div>
		</div>

		<div>
			<div class="mt-8 flex flex-wrap md:flex-nowrap">
				<span class="px-1 font-medium">TopBar.svelte :</span>
				You can customize it or replace it with your own TopBar but don't forget to add a button to toggle
				sidebar on mobile
			</div>
		</div>

		<div class="mt-8 flex flex-wrap md:flex-nowrap">
			<span class="pl-3 font-medium">store.ts</span> :
			<p class="pl-1">where all states for handling opening and closing sidebar are defined</p>
		</div>
	</section>

	<section class="mb-16 px-3 py-8 md:px-8">
		<h2 class="text-2xl font-medium">Export</h2>
		<p class="mt-4">
			As there is no vendor lock-in, if you already have a dashboard, you can copy the
			<strong class="px-1">dashboard</strong>folder into your project
		</p>
		<div class="mt-8">
			<ul class="mt-4 list-disc pl-6">
				<li class="mb-3">
					Add your routes in the
					<strong class="px-1">dashboard/sidebar/data.ts</strong>
					file
				</li>
				<li class="mb-3">
					Replace your layout by the
					<strong class="px-1">DashboardLayout</strong>component
				</li>
			</ul>
		</div>
	</section>

	<section class="mb-16 px-3 py-8 md:px-8">
		<h2 class="text-2xl font-medium">Customization</h2>
		<p class="mt-5">
			You can customize everything according to your preferences if it doesn't suit you. What we
			have done is just provide a solid structure for better scalability and readability of the
			code.
		</p>
		<p class="mt-5">
			The sidebar scrollbar is hidden by default but you can still scroll with the keyboards if you
			have several sidebar-items.
		</p>
		<p class="mt-5">
			In the <strong> dashboard/Layout.svelte</strong> file,
			<strong class="pl-1">Sidebar</strong> component has as prop
			<strong class="pl-1">mobileOrientation</strong>, which indicates the orientation of the
			sidebar on small devices (viewport {'<'} 1024px).
		</p>
		<p class="pt-5">That prop can have two possible values :</p>
		<ul class="mt-4 list-disc pl-6">
			<li class="mb-3">
				<strong>start :</strong> sidebar will be aligned to the left
			</li>
			<li>
				<strong>end :</strong> sidebar will be aligned to the right
			</li>
		</ul>
	</section> -->
</div>

<style>
	h2 {
		color: white;
	}

	/* section {
		color: rgb(209 213 219);
	} */
</style>
