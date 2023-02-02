<x-app-layout :page="$page">
    <x-page-heroine>
        <x-slot:title>
            My <span class="text-apple">Work</span>.
        </x-slot>
        <x-slot:heroineImage>
            <video autoplay loop muted playsinline>
                <source src="/assets/vid/ph-work.webm" type="video/webm">
            </video>
        </x-slot>
    </x-page-heroine>
</x-app-layout>
