import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CLOCK_CONSTANTS as cc } from './clock.constants';
import { TimeService } from '../services/time.service';

@Component({
  selector: 'app-clock',
  imports: [CommonModule],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.scss',
})
export class ClockComponent implements OnInit {
  // Rotation angles
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  clockNumbers = this.generateClockNumbers();

  public generateClockNumbers() {
    const numbers = [];
    const centerOffset = cc.CENTER_OFFSET;
    const radius = cc.RADIUS;

    // Loop through the numbers 1 to 12 to calculate theirs positions
    for (let n = 1; n <= 12; n++) {
      const angle = (n - 3) * cc.DEGREES_PER_HOUR * cc.DEG_TO_RAD;
      const top = centerOffset + radius * Math.sin(angle);
      const left = centerOffset + radius * Math.cos(angle);

      // Add numbers to the array
      numbers.push({
        number: n,
        position: {
          top: `${top}%`,
          left: `${left}%`,
        },
      });
    }
    return numbers;
  }

  constructor(private readonly timeService: TimeService) {}

  ngOnInit() {}
}
