import { Component, Output, EventEmitter, Input } from '@angular/core';
import { IHelpMenuDataItem, MaximizedOrMinimized } from '../help.utils';

@Component({
  selector: 'td-help-window',
  templateUrl: './help-window.component.html',
  styleUrls: ['./help-window.component.scss'],
})
export class HelpWindowComponent {
  @Input() items: IHelpMenuDataItem[];
  @Input() windowState: MaximizedOrMinimized = MaximizedOrMinimized.Maximized;
  @Input() draggable: boolean = false;

  // outputs only for non-draggable toolbar
  @Output() closed: EventEmitter<any> = new EventEmitter();
  @Output() minimized: EventEmitter<any> = new EventEmitter();
  @Output() maximized: EventEmitter<any> = new EventEmitter();

  get height(): number {
    return this.windowState === MaximizedOrMinimized.Maximized ? 475 : 0;
  }

  handleMinimized(): void {
    this.windowState = MaximizedOrMinimized.Minimized;
    this.minimized.emit();
  }

  handleMaximized(): void {
    this.windowState = MaximizedOrMinimized.Maximized;
    this.maximized.emit();
  }


}