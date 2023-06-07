# Twitter Suggestion List Clone

This project is a clone of the Twitter suggestion list section using React. It replicates the user suggestion feature found on Twitter, where a list of recommended users is displayed in a card format. The project includes a `UserCard` component that manages the `isFollowing` state and accepts props such as `username`. The `src` attribute of the user image dynamically changes based on the `username` parameter.

##Twitter Component

[![twitter-Component.png](https://i.postimg.cc/h47kn21g/twitter-Component.png)](https://postimg.cc/F1NWgg6n)

## Installation

To run this project locally, follow these steps:

1. Clone the repository.
2. Navigate to the project directory.
3. Install the dependencies.
4. Start the development server.
5. Open your browser and visit `http://localhost:3000` to see the project running.

## Components

### UserCard

The `UserCard` component is responsible for displaying user information in a card format. It accepts the following props:

- `username` (string): The username of the user.
- `isFollowing` (boolean): Indicates whether the user is being followed.

The `src` attribute of the user image is dynamically determined based on the `username` prop.

## Usage

To use the `UserCard` component, import it into your desired component and pass the required props.

## Additional Notes

This project provides a practical example of using React's `useState` hook to manage component state. By toggling the `isFollowing` state, you can simulate following and unfollowing users in the Twitter suggestion list.

Feel free to explore and modify the code to suit your needs. Happy coding!
