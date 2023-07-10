import { ChangeDetectorRef, Component, signal, OnInit } from '@angular/core';
import {
  CalendarOptions,
  DateSelectArg,
  EventApi,
  EventClickArg,
  EventInput,
} from '@fullcalendar/core';
import esLocale from '@fullcalendar/core/locales/es';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { INITIAL_EVENTS, createEventId } from '../../../../../base/constants';
@Component({
  selector: 'index-calendar',
  templateUrl: './index-calendar.component.html',
  styleUrls: ['./index-calendar.component.scss'],
})
export class IndexCalendarComponent {
  constructor(private changeDetector: ChangeDetectorRef) {}

  allEvent: EventInput[]=[];

  calendarVisible = signal(true);
  calendarOptions = signal<CalendarOptions>({
    locales: [esLocale],
    locale: 'es', // the initial locale. if not specified, uses the first one
    plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
    },
    initialView: 'timeGridDay',
    initialEvents: this.allEvent, // alternatively, use the `events` setting to fetch from a feed
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    // windowResizeDelay: 50,
    height: 'auto',
    //contentHeight:100,
    //aspectRatio : 3,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this),
    /* you can update a remote database when these fire:
    eventAdd:
    eventChange:
    eventRemove:
    */
  });

  currentEvents = signal<EventApi[]>([]);

  // ?Oculta el Caelndario
  // handleCalendarToggle() {
  //   this.calendarVisible.update((bool) => !bool)
  // }

  // ?muesta los eventos de la semana
  // handleWeekendsToggle() {
  //   this.calendarOptions.mutate((options) => {
  //     options.weekends = !options.weekends
  //   })
  // }

  // *Toma la información de la fecha y hora seleccionadas
  handleDateSelect(selectInfo: DateSelectArg) {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selectInfo.view.calendar;
    console.log('calendarApi', calendarApi);
    calendarApi.unselect(); // *limpia los datos seleccionados

    if (title) {
      // *Añade un evento al calendario
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  }
  // *Click sobre el evento en el calendario
  handleEventClick(clickInfo: EventClickArg) {
    if (
      confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents.set(events);
    this.changeDetector.detectChanges(); // workaround for pressionChangedAfterItHasBeenCheckedError
  }


  ngOnInit() {

    const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

    this.allEvent.push(
      {
        id: createEventId(),
        title: 'All-day event',
        start: TODAY_STR
      },
      {
        id: createEventId(),
        title: 'Timed event',
        start: TODAY_STR + 'T00:00:00',
        end: TODAY_STR + 'T03:00:00'
      },
      {
        id: createEventId(),
        title: 'Timed event',
        start: TODAY_STR + 'T12:00:00',
        end: TODAY_STR + 'T15:00:00'
      })



  }

   createEventId() {
    let eventGuid = 0;
    return String(eventGuid++);
  }
}
