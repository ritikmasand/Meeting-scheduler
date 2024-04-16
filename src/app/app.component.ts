import { Component } from '@angular/core';

interface Meeting {
  userName: string;
  meetingRoom: string;
  meetingTitle: string;
  numberOfPeople: string;
  date: Date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  viewmode: string = 'meetingform';
  username: string = '';
  meetingRoom: string = '';
  meetingTitle: string = '';
  data: Date = new Date();
  numberOfPeople: string = '';
  meetings: Meeting[] = [];
  // currentMeeting:Meeting={}

  addMeeting() {
    this.meetings.push({
      userName: this.username,
      meetingRoom: this.meetingRoom,
      meetingTitle: this.meetingTitle,
      numberOfPeople: this.numberOfPeople,
      date: this.data
    });
    this.clearForm();
    this.viewmode = 'meetinglist';
  }

  clearForm() {
    this.username = '';
    this.meetingRoom = '';
    this.meetingTitle = '';
    this.data = new Date();
    this.numberOfPeople = '';
  }

  toggleMeetingForm() {
    this.viewmode = 'meetingform';
  }
}
