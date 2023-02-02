<x-app-layout :page="$page">
    <x-page-heroine>
        <x-slot:title>
            My <span class="text-apple">Life</span>.
        </x-slot>
        <x-slot:heroineImage>
            <img src="/assets/img/ph-life.jpg" alt="My life">
        </x-slot>
    </x-page-heroine>
    <div class="art-page-lead art-ct art-ct-sm mt-8">
        <p class="text-4xl font-bold !leading-tight">Photography has always held a special place in my heart. Ever since I was young, I have been captivated by the art of capturing moments and memories through the lens of a camera.</p>
        <p class="text-fliess">Over the years, my passion for photography has only grown stronger and I am constantly striving to improve my skills and push my creative boundaries. </p>
    </div>
    <x-spacer class="h-12 md:h-28"/>
    <div class="art-ct art-ct-lg">
        <x-columns class="xl:items-center">
            <x-slot:col1>
                <x-image-aspect-ratio src='/assets/img/my-life1.jpg' class="pb-full" alt='My beautiful fiancé'/>
            </x-slot:col1>
            <x-slot:col2>
                <p class="text-fliess">One of my biggest driving forces as a photographer is my desire to be daring and find new and unique motives. I am always on the lookout for new and interesting subjects to photograph, whether it's a cityscape at dawn or an intimate portrait of a stranger. I believe that photography is not just about capturing what is in front of you, but also about discovering and exploring the world around you.</p>
            </x-slot:col2>
        </x-columns>
    </div>
    <x-spacer class="h-12 md:h-28"/>
    <x-blockquote quote="You don't take a photograph, you make it." author='Ansel Adams' desc='American photographer'/>
    <x-spacer class="h-12 md:h-28"/>
    <div class="art-ct art-ct-sm">
        <p class="text-fliess">In my free time, I love to go on hikes and explore new places with my brother and friends, always with my camera in tow. I find that being in nature provides an endless source of inspiration and allows me to capture some truly breathtaking landscapes. Whether I'm trekking up a mountain or wandering through a forest, I always come back with a sense of renewal and a renewed appreciation for the world around me.</p>
    </div>
    <x-spacer class="h-12 md:h-28"/>
    <x-image-gallery name='my-life' />
    <x-spacer class="h-12 md:h-28"/>
    <div class="art-ct art-ct-sm">
        <p class="text-fliess">Aside from photography, I have a deep appreciation for the great outdoors and all it has to offer. Going on hikes and exploring new places has become a way of life for me and I find that it brings me a sense of peace and fulfillment. Whether I'm capturing the beauty of nature through my camera or simply enjoying the scenery with my own eyes, I know that I will always have a deep love and connection to the world around me.</p>
    </div>
    <x-spacer class="h-24 md:h-40"/>
    <x-footer />
</x-app-layout>
