<?php

namespace App\View\Components;

use Illuminate\View\Component;

class Blockquote extends Component
{
    public $quote;
    public $author;
    public $desc;
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($quote, $author, $desc)
    {
        $this->quote = $quote;
        $this->author = $author;
        $this->desc = $desc;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.blockquote');
    }
}
