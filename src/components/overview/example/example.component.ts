import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'storybook-addon-overview-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleComponent {
  @Input()
  public title;

  @Input()
  public source;

  @Input()
  public showSource = false;

  @Input()
  public canHideSource = true;

  public toggleSource = () => (this.showSource = !this.showSource);
}
