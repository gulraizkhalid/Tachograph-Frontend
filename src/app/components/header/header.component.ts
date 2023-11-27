import { Component, OnInit } from '@angular/core';
import { Record } from '../../Record';
import { RecordService } from '../../services/record.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  records: Record[] = [];

  myForm!: FormGroup;
  selectedOption?: string;

  constructor(private recordService: RecordService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      selectedOption: ['', Validators.required],
      selectedDate: [null, Validators.required],
    });

    this.recordService
      .getRecords()
      .subscribe((records) => (this.records = records));
  }
  submitForm(): void {
    if (this.myForm.valid) {
      const selectedOption = this.myForm.get('selectedOption')?.value;
      const selectedDate = this.myForm.get('selectedDate')?.value;

      const postData = {
        stringValue: selectedOption,
        dateValue: selectedDate,
      };

      console.log(postData);

      this.recordService.postRecords(postData).subscribe((response) => {
        console.log('POST response:', response);
        // Handle the response as needed
      });
    }
  }
}
