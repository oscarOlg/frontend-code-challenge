# User Data Table Readme

This is a simple user data table application built using JavaScript, HTML, and CSS in React Framework with Typescript. It allows you to retrieve user data from an API, display it on a table, and provides the following functionalities:

## Functionalities

- **Sorting by Country**: You can sort the user data table by the country alphabetically.

- **Changing Table Color**: You have the option to change the background color of the table.

- **Deleting a Row**: You can delete a specific row from the table.

- **Searching by Country**: You can search for users based on their country and display matching results.

## Getting Started

To run this application, you need to have Node.js installed on your system. If you don't have it, you can download it from the official website: [Node.js](https://nodejs.org/)

### Installation

1. Clone this repository to your local machine.

```bash
git clone https://github.com/oscarOlg/frontend-code-challenge.git
```

2. Navigate to the project directory.

```bash
cd frontend-code-challenge
```

3. Install the dependencies.

```bash
npm install
```

### Development

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Testing

To run the tests for the application, use the following command:

```bash
npm run test
```

This will execute all the tests in the __tests__ folder.

## Usage

Once the application is running in your browser, you will see the user data table with various columns like avatar, first name, last name and country, You can perform the following actions:

- Click on **color table** button to change the background of the table.

- Click on **Sort by country** button to sort table by country alphabetically.

- Click on the **delete** button to delete that particular row.

- Use the **search input** to enter a country name filter and display only the rows that match the entered country name.

## Acknowledgments

The user data in this application is fetched from the [(https://randomuser.me)](https://randomuser.me) Data API.
