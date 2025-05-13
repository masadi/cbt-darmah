<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use PhpOffice\PhpWord\IOFactory;
use Intervention\Image\Laravel\Facades\Image;
use Storage;

class WordController extends Controller
{
    public function index(){
        $reader = IOFactory::createReader('Word2007');
        $wordDocument = $reader->load(public_path('templates/sample.docx'));
        /*
        $htmlWriter = IOFactory::createWriter($wordDocument, 'HTML');
        $pathinfo = pathinfo(public_path('templates/sample.docx'));
        $path = $pathinfo['dirname'] . '/' . $pathinfo['filename'] . '.html';
        $htmlWriter->save(storage_path('app/public/soal/'. $pathinfo['filename'] .'.html'));
        */
        $text = '';
        foreach ($wordDocument->getSections() as $section) {
            foreach ($section->getElements() as $el) {
                if ($el instanceof \PhpOffice\PhpWord\Element\TextRun) {
                    foreach($el->getElements() as $element){
                        if ($element instanceof \PhpOffice\PhpWord\Element\Image) {
                            //$path = public_path().'img/designs/' . $element->getTarget();
                            //Image::create($element->getImageStringData(TRUE))->save($path);
                            Storage::disk('public')->put('soal/'.$element->getTarget(), base64_decode($element->getImageStringData(TRUE)));
                            /*dump($element->getTarget());
                            dump($element->getStyle());
                            dump($element->getImageType());
                            dump($element->getImageStringData(TRUE));
                            dd($element);*/
                        } elseif ($element instanceof \PhpOffice\PhpWord\Element\Text) {
                            echo 'atas';
                            dd($element->getFontStyle());
                            //dump($element);
                        } else {
                            dump($element);
                        }
                    }
                    //dd($element);
                    //$text .= $element->getText();
                } elseif ($el instanceof \PhpOffice\PhpWord\Element\TextBreak) {
                } elseif ($el instanceof \PhpOffice\PhpWord\Element\Table) {
                    $rows = $el->getRows();
                    foreach($rows as $row){
                        $cells = $row->getCells();
                        foreach($cells as $cell){
                            //dump($cell);
                            foreach($cell->getElements() as $cellElement){
                                if ($cellElement instanceof \PhpOffice\PhpWord\Element\TextRun) {
                                    foreach($cellElement->getElements() as $element){
                                        echo 'bawah';
                                        dd($element->getFontStyle());
                                        if ($element instanceof \PhpOffice\PhpWord\Element\Text) {
                                            dump($element->getText());
                                        }
                                    }
                                }
                            }
                        }
                    }
                    dump($rows);
                } else {
                    dd($el);
                }
            // and so on for other element types (see src/PhpWord/Element)
            }
        }
        echo $text;
        dd($wordDocument);
    }
}
