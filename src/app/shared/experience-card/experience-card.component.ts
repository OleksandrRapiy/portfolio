import { Component, Input, OnInit } from '@angular/core';
import { Experience } from 'src/app/models/experience.model';

@Component({
  selector: 'experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss']
})
export class ExperienceCardComponent implements OnInit {

  @Input() experience: Experience = null;

  constructor() { }

  ngOnInit(): void {
  }

}
