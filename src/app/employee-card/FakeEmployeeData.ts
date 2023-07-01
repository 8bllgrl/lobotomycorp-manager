import { Employee } from "./Employee";

export class FakeEmployeeData {
  static employees: Employee[] = [
    {
      picture: 'path-to-picture1',
      stats: {
        SP: 10,
        HP: 20,
        WS: 30,
        ASMS: 40
      },
      name: 'John Doe'
    },
    {
      picture: 'path-to-picture2',
      stats: {
        SP: 15,
        HP: 25,
        WS: 35,
        ASMS: 45
      },
      name: 'Jane Smith'
    },
    {
      picture: 'path-to-picture2',
      stats: {
        SP: 100,
        HP: 50,
        WS: 70,
        ASMS: 45
      },
      name: 'Razputin Aquato'
    },
    {
      picture: 'path-to-picture2',
      stats: {
        SP: 15,
        HP: 25,
        WS: 35,
        ASMS: 45
      },
      name: 'Angelo Lorelei'
    },
    {
      picture: 'path-to-picture2',
      stats: {
        SP: 15,
        HP: 25,
        WS: 35,
        ASMS: 45
      },
      name: 'Fievel Vairemont'
    },
    {
      picture: 'path-to-picture2',
      stats: {
        SP: 15,
        HP: 25,
        WS: 35,
        ASMS: 45
      },
      name: 'Hanami Hami'
    },
    {
      picture: 'path-to-picture2',
      stats: {
        SP: 15,
        HP: 25,
        WS: 35,
        ASMS: 45
      },
      name: 'Mimi Murray'
    },
    // Add more employees as needed
  ];
}