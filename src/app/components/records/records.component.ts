import { Component, OnInit } from '@angular/core';
import { Record } from '../../Record';
import { RecordService } from '../../services/record.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css'],
})
export class RecordsComponent implements OnInit {
  records: Record[] = [];

  constructor(private recordService: RecordService) {}

  ngOnInit(): void {
    this.recordService
      .getRecords()
      .subscribe((records) => (this.records = records));
  }
}
