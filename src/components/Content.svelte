<script lang="ts">
	import VideoPlayer from './VideoPlayer.svelte';
	import TextArea from './TextArea.svelte';
	import Spinner from './Spinner.svelte';
	import { generateTalk, getOutput, getImgUrl } from '$lib/d_id';
	import { createAvatar, getAvatar } from '$lib/monster';

	let imageUrl: any;
	let message: any;
	let id: any;
	let src: any;

	let isVideo = false;
	let btnVideo = false;
	let isDownload = false;
	let gender = '';

	async function handleGenerate() {
		gender = JSON.stringify(localStorage.getItem('gender'));
		console.log('gender=>', gender);
		isVideo = true;
		btnVideo = true;
		id = await generateTalk(imageUrl, message, gender);

		console.log(id);

		src = await getOutput(id);
		isVideo = false;
		console.log(src);
	}

	function updateText(newText: string) {
		message = newText;
	}

	function exportVideo() {
		isDownload = true;
		window.open(src, '_blank');
		isDownload = false;
	}

	// upload image func
	let file: any;
	let url: any;
	let btnAvatar = false;
	let isAvatar = false;
	const uploadUrl = 'https://upload.imagekit.io/api/v1/files/upload';
	const publicKey = 'private_pAfesmM8enhg2Up/GfC9OBWUMnY=';
	const handleFileUpload = async () => {
		const formData = new FormData();
		formData.append('file', file);
		formData.append('fileName', file.name);

		try {
			const response = await fetch(uploadUrl, {
				method: 'POST',
				headers: {
					Authorization: `Basic ${btoa(publicKey + ':')}`
				},
				body: formData
			});

			const data = await response.json();
			console.log('Success:', data);
			url = data.url;

			console.log(url);
		} catch (error) {
			console.error('Error:', error);
		}
	};

	const handleFileChange = async (event: any) => {
		file = event.target.files[0];
		handleFileUpload();
	};

	const newAvatar = async () => {
		localStorage.setItem('gender', gender);
		isAvatar = true;
		btnAvatar = true;
		const id = await createAvatar(url, gender);
		imageUrl = await getAvatar(id);
		console.log(imageUrl);
		isAvatar = false;
	};
</script>

<div class="mt-6 mb-3 text-white font-medium">Text to Speech</div>
<div class="p-4 font-normal rounded-2xl" style=" background-color: rgba(158, 158, 158, 0.3)">
	<div class="flex justify-end pb-2 mb-6 border-b border-gray-300">
		<div class="mr-auto flex">
			<label class="inline-flex items-center cursor-pointer">
				<input type="checkbox" value="" class="sr-only peer" disabled />
				<div
					class="relative w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
				/>
				<span class="ms-3 text-gray-400 dark:text-gray-500">Subtitle</span>
			</label>
		</div>

		<div class="ml-auto flex">
			<div>
				<button
					class="border-gray-300 rounded-full px-5 py-1 border text-gray-300"
					on:click={exportVideo}
				>
					<Spinner loading={isDownload} text="Export" />
				</button>
			</div>
		</div>
	</div>

	<div class="flex justify-end">
		<div class=" w-3/5">
			<div class="mt-6 px-5 flex flex-col gap-3 text-gray-300">
				<p>Upload Foto</p>
				{#if url}
					<!-- svelte-ignore a11y-img-redundant-alt -->
					<img src={url} alt="photo uploaded" class="rounded-2xl" />
				{:else}
					<div class="flex items-center justify-center w-full">
						<label
							for="dropzone-file"
							class="flex flex-col items-center justify-center w-full h-44 border-2 border-gray-400 border-dashed rounded-2xl cursor-pointer hover:bg-gray-500"
						>
							<div class="flex flex-col items-center justify-center pt-5 pb-6">
								<svg
									class="w-8 h-8 mb-4 text-gray-300"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 20 16"
								>
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
									/>
								</svg>
								<p class="mb-2 text-sm text-gray-300">
									<span class="font-semibold">Click to upload</span>
								</p>
								<p class="text-xs text-gray-300">or drag photo</p>
							</div>
						</label>
						<input id="dropzone-file" type="file" class="hidden" on:change={handleFileChange} />
					</div>
				{/if}

				<hr />
				<p>Pilih Jenis Kelamin</p>

				<div
					class="grid grid-cols-2 grid-rows-1 items-center p-1 w-full h-14 gap-2 border-2 border-gray-300 rounded-full"
				>
					<div>
						<input
							type="radio"
							name="option"
							id="male"
							value="male"
							class="peer hidden"
							bind:group={gender}
							checked
						/>
						<label
							for="male"
							class="flex items-center justify-center gap-1 w-full cursor-pointer select-none rounded-full p-2 text-center peer-checked:bg-[#006AFF] peer-checked:font-semibold peer-checked:text-white"
						>
							<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"
								><path
									fill="currentColor"
									d="M18.41 3.41L16 4.5l2.41 1.09L19.5 8l1.1-2.41L23 4.5l-2.4-1.09L19.5 1M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10c0-1.47-.33-2.87-.9-4.13l-1.24 2.72c.08.46.14.91.14 1.41c0 4.43-3.57 8-8 8s-8-3.57-8-8v-.13a10 10 0 0 0 5.74-5.56A10 10 0 0 0 17.5 10a10 10 0 0 0 1.33-.09l-1.48-3.26L12.6 4.5l3.53-1.6C14.87 2.33 13.47 2 12 2m-3 9.75A1.25 1.25 0 0 0 7.75 13A1.25 1.25 0 0 0 9 14.25A1.25 1.25 0 0 0 10.25 13A1.25 1.25 0 0 0 9 11.75m6 0A1.25 1.25 0 0 0 13.75 13A1.25 1.25 0 0 0 15 14.25A1.25 1.25 0 0 0 16.25 13A1.25 1.25 0 0 0 15 11.75"
								/></svg
							>
							<p>Laki - laki</p>
						</label>
					</div>
					<div>
						<input
							type="radio"
							name="option"
							id="female"
							value="female"
							class="peer hidden"
							bind:group={gender}
						/>
						<label
							for="female"
							class="flex items-center justify-center gap-1 w-full cursor-pointer select-none rounded-full p-2 text-center peer-checked:bg-[#006AFF] peer-checked:font-semibold peer-checked:text-white"
						>
							<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"
								><path
									fill="currentColor"
									d="m19.5 1l-1.09 2.41L16 4.5l2.41 1.09L19.5 8l1.1-2.41L23 4.5l-2.4-1.09zM12 2C6.5 2 2 6.5 2 12v10h20V12c0-1.47-.33-2.87-.9-4.13l-1.24 2.72c.08.46.14.91.14 1.41c0 4.43-3.57 8-8 8s-8-3.57-8-8v-.13a10 10 0 0 0 5.74-5.56A10 10 0 0 0 17.5 10a10 10 0 0 0 1.33-.09l-1.48-3.26L12.6 4.5l3.53-1.6C14.87 2.33 13.47 2 12 2m-3 9.75A1.25 1.25 0 0 0 7.75 13A1.25 1.25 0 0 0 9 14.25A1.25 1.25 0 0 0 10.25 13A1.25 1.25 0 0 0 9 11.75m6 0A1.25 1.25 0 0 0 13.75 13A1.25 1.25 0 0 0 15 14.25A1.25 1.25 0 0 0 16.25 13A1.25 1.25 0 0 0 15 11.75"
								/></svg
							>
							<p>Perempuan</p>
						</label>
					</div>
				</div>
				<hr />
				<button
					class="py-2 px-4 bg-[#006AFF] hover:bg-blue-700 text-white flex items-center justify-center w-full rounded-2xl"
					on:click={newAvatar}
					disabled={btnAvatar}
				>
					<Spinner loading={isAvatar} text="AI Protrait ˚✧" />
				</button>
				<hr />
				<p>Teks untuk Pembicara</p>
				<div>
					<TextArea {message} onTextChange={updateText} />
				</div>
				<hr />

				<button
					class="py-2 px-4 bg-[#006AFF] hover:bg-blue-700 text-white flex items-center justify-center w-full rounded-2xl"
					on:click={handleGenerate}
					disabled={btnVideo}
				>
					<Spinner loading={isAvatar} text="Process" />
				</button>
				<!-- </main> -->
			</div>
		</div>
		<div class=" w-2/5">
			{#if imageUrl}
				<img src={imageUrl} alt="ai portrait" class="rounded-2xl" />
			{:else}
				<img src="/images/portrait-placeholder.png" alt="placeholder" class="rounded-2xl" />
			{/if}
		</div>
	</div>
</div>
<div class="mt-6 mb-3 text-white font-medium">Video Output</div>
<section class="p-4 font-normal rounded-2xl" style="background-color: rgba(158, 158, 158, 0.3)">
	<div class="flex justify-end pb-2 mb-6 border-b border-gray-300">
		<h2 class="text-gray-300 font-semibold">StimpFy3D</h2>
		<div class="ml-auto flex">
			<div>
				<button
					class="border-gray-300 rounded-full px-5 py-1 border text-gray-200"
					on:click={exportVideo}
				>
					<Spinner loading={isDownload} text="Export" />
				</button>
			</div>
		</div>
	</div>
	{#if src}
		<div
			class="flex flex-wrap md:flex-nowrap items-center justify-center w-full rounded-2xl py-6 px-12 bg-gray-400"
		>
			<VideoPlayer {src} controls autoplay={false} />
		</div>
	{:else}
		<img
			src="/images/video-placeholder.png"
			alt="waiting for video"
			class="rounded-2xl mx-auto w-10/12"
		/>
	{/if}
</section>

<style>
	button:disabled {
		cursor: not-allowed;
		opacity: 0.2;
	}
</style>
