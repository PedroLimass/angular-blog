import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  @Input() photoCover: string = '';
  @Input() contentTitle: string = '';
  @Input() contentDescription: string = '';
  private id: string = '0';
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (value) => (this.id = value.get('id')?.toString()!)
    );

    this.setValueToComponent(this.id);
  }

  setValueToComponent(idData: string | null) {
    const result = dataFake.filter((art) => art.id == idData)[0];
    console.log('👻',result.title);
    // if(!result) {
      this.contentTitle = result?.title
      this.contentDescription = result?.description
      this.photoCover = result?.photo_url
    // }
  }
}
