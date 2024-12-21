import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-find-and-replace',
  templateUrl: './find-and-replace.component.html',
  styleUrls: ['./find-and-replace.component.css']
})
export class FindAndReplaceComponent implements OnInit {
  findandreplaceForm!: FormGroup;
  wordExp = /(([a-zA-Z\s])?\w+)/;
  replacedText: string = "";
  matchCount = 0;
  constructor(private formBuilder: FormBuilder) {
    this.initializeFrom();
  }

  ngOnInit(): void {

  }

  initializeFrom() {
    this.findandreplaceForm = this.formBuilder.group({
      find_textarea: ["", Validators.required],
      replace_textarea: [""],
      find_textinput: ["", Validators.required],
      replace_textinput: [""],
      matchcase_checkbox: [true]
    });
  }

  replaceText() {

    const word = this.findandreplaceForm.controls['find_textinput'].getRawValue();
    const inputText = this.findandreplaceForm.controls['find_textarea'].getRawValue();
    const replaceword = this.findandreplaceForm.controls['replace_textinput'].getRawValue();
    const e = `\\b${this.escapeRegExp(word)}\\b`;
    const isCaseSensitive = this.findandreplaceForm.controls['matchcase_checkbox'].getRawValue()
    const regex = new RegExp(`\\b${e}\\b`, isCaseSensitive ? 'g' : 'gi');
    this.replacedText = inputText.replace(regex, (match: any) => `<span style="background-color: yellow;">${match}</span>`);
    this.matchCount = inputText.match(regex, replaceword).length;
    this.findandreplaceForm.controls['replace_textarea'].setValue(this.replacedText);
  }

  escapeRegExp(word: any) {
    return word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
}
