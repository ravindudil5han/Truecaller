## TrueCaller Search API with Express

This repository contains a simple Node.js application that allows you to perform TrueCaller number searches using the TrueCallerJS library and expose the functionality via a RESTful API using Express.js. TrueCaller is a popular service for identifying and verifying phone numbers. With this code, you can easily integrate TrueCaller's capabilities into your own projects.

### Features

- Perform TrueCaller number searches for caller identification.
- Retrieve information associated with a phone number, such as the caller's name and more.
- Expose the TrueCaller search functionality as a RESTful API.
- Easy setup and usage with Express.js.

### Prerequisites

Before using this code, ensure you have the following prerequisites installed on your system:

- Node.js
- npm (Node Package Manager)
- A TrueCaller API key (replace "your id" in the code with your actual API key).

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/ravindudil5han/Truecaller.git
   ```

2. Change into the project directory:

   ```bash
   cd Truecaller
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

### Usage

1. Obtain a TrueCaller API key by signing up on the TrueCaller developer portal.

2. Replace the `installationId` value in the code with your TrueCaller API key.

3. Start the Express server:

   ```bash
   npm start
   ```

4. The server will start on `http://localhost:3000` by default. You can change the port by setting the `PORT` environment variable.

5. To perform a TrueCaller number search, make a GET request to the `/search` endpoint with the following query parameters:
   - `number`: The phone number you want to search.
   - `countryCode`: The country code for the phone number.

   Example request:

   ```bash
   http://localhost:3000/search?number=123456789&countryCode=US
   ```

   Example response:

   ```json
   {
     "name": "John Doe",
     "location": "New York, NY",
     "tags": ["Spam", "Telemarketer"]
   }
   ```

### Contributions

Contributions to this project are welcome. If you encounter any issues or have ideas for improvements, feel free to create a pull request or open an issue on the repository.

### License

This project is licensed under the GNU v3.0 License. See the [LICENSE](LICENSE) file for details.

### Disclaimer

This project is for educational and demonstrative purposes only. Use it responsibly and ensure compliance with TrueCaller's terms of use and any applicable laws when using their service.




