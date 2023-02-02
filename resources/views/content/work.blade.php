<x-app-layout :page="$page">
    <x-page-heroine>
        <x-slot:title>
            My <span class="text-apple">Work</span>.
        </x-slot>
        <x-slot:heroineImage>
            <video autoplay loop muted playsinline>
                <source src="/assets/vid/ph-work.mp4" type="video/mp4">
            </video>
        </x-slot>
    </x-page-heroine>
    <div class="art-page-lead art-ct art-ct-sm mt-8">
        <p class="text-4xl font-bold !leading-tight">I have been a photographer and videographer for a number of years and have had the privilege of co-founding the marketing and media collective, K., based in Zurich. </p>
    </div>
    <x-spacer class="h-12 md:h-28"/>
    <div class="art-ct art-ct-lg">
        <x-columns class="xl:items-center">
            <x-slot:mobile>
                <x-image-aspect-ratio src='/assets/img/my-work1.jpeg' class="pb-full" alt='Me at work'/>
            </x-slot:mobile>
            <x-slot:col1>
                <p class="text-fliess">Through my work with K., I have been fortunate to work on a diverse range of projects, including marketing videos, political candidate portraits, and product photography.</p>
                <p class="text-fliess">While pursuing my degree in hospitality management at Ecole Hotelière de Lausanne, I was selected to participate in the school's Photography Committee. I began my involvement as the Head of Media and later assumed the position of President.</p>
            </x-slot:col1>
            <x-slot:col2>
                <x-image-aspect-ratio src='/assets/img/my-work1.jpeg' class="pb-full" alt='Me at work'/>
            </x-slot:col2>
        </x-columns>
    </div>
    <x-spacer class="h-12 md:h-28"/>
    <x-blockquote quote='Photography is the simplest thing in the world, but it is incredibly complicated to make it really work.' author='Martin Parr' desc='documentary photographer, photojournalist and photobook collector'/>
    <x-spacer class="h-12 md:h-28"/>
    <div class="art-ct art-ct-sm">
        <p class="text-fliess">In this capacity, I was responsible for the photo and videographic coverage of events hosted by both Ecole Hotelière de Lausanne and its various committees, and I was honored to fulfill this role.</p>
    </div>
    <x-spacer class="h-12 md:h-28"/>
    <x-image-gallery name='my-work' />
    <x-spacer class="h-12 md:h-28"/>
    <div class="art-ct art-ct-sm">
        <p class="text-fliess">One of my most significant achievements as a member of the Photography Committee was the organization of the semiannual CV photoshoot, which provided both students and staff with the opportunity to have their professional headshots taken. As President during the autumn session of 2022, I was instrumental in ensuring that the photoshoot was well-attended, with the highest participation in the past decade. Furthermore, I was proud to co-organize the first paid public live-stream of the school's fashion show, the largest fashion show in the canton of Vaud.</p>
    </div>
    <x-spacer class="h-24 md:h-40"/>
    <x-footer />
</x-app-layout>
