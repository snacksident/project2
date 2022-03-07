# Hall Pass

## Concept

* Teachers these days have enough on their plates - with managing in-class students, remote students, grading, curriculum...  With this hallpass logging app, teachers will have one less thing to worry about!  Hallpass Loggr will provide at-a-glance information about which students are currently in the classroom and which are out on a break.  No more stressing about where a certain student is (in a lab, meeting with administration, on a bio break), just take a quick look at the app screen!

## user stories

* As a teacher of many high school classes, i want an easy-to-use app to track which students are currently in the classroom and which are on a hall pass.

* As a teacher of many classes, i want to be able to pick one student and look at their hall pass history

## ERDs

![an ERD of my project](./hallpassERD.drawio.png)

## Routes

| Method | Path            | Purpose                                                             |
|--------|-----------------|---------------------------------------------------------------------|
| GET    | `/`             | Landing Page - Display landing and links to log in                  |
| GET    | `/classes`      | class page that lists all classes the user has access to            |
| POST   | `/classes`      | creates new class, redirects to `GET /classes`                      |
| GET    | `/classes/new`  | page that has form for creating new class                           |
| GET    | `/classes/:id`  | page that lists all students in a specific class                    |
| PATCH  | `/class/:id`    | page to update a pre-existing class, redirects to `get /class`      |
| GET    | `/students`     | page that lists all students                                        |
| POST   | `/students`     | creates new student, redirects to `GET /students`                   |
| GET    | `/students/new` | page that has form for creating new student                         |
| GET    | `/students/:id` | page to list details on specific student                            |
| PATCH  | `/students/:id` | page to update a pre-existing student, redirects to `GET /students` |
| DELETE | `/students/:id` | page to delete a specific student. redirects to `GET /students`     |
|        |                 |                                                                     |

## Wireframe

![first draft of wireframe views](./wireframe.png)

## MVP Goals

* Create website where teachers can store a classroom of students

* User ability to create new classrooms

* User ability to create new students

* User ability to delete classes

* Ability to check students in and out of classroom with a "hallpass"

* View each students hall pass usage



## Stretch Goals

* View details of students hall pass usage 

* Neat and clean styling 

* Add notes for each hallpass usage

* Quick display of most recent hallpass logs for each student

* Ability for user to arrange students on `/classes/:id` page