# Google CloudRun Function

This repository contains the code for the Google CloudRun Function: `makeAlphaHex`

## Running locally

### Prerequisites:

- You will need a Google Cloud Project setup
- You will need to associate a billing account with that project
- You will need to enable to the following APIs for the project:
    <details>
      <summary>APIs</summary>

    - Cloud Functions API
    - Cloud Logging API
    - Cloud Build API
    - Cloud Storage
    - Container Registry API

    </details>
- You will need the [gcloud sdk](https://cloud.google.com/sdk/docs/install)
    <details>
      <summary>Setting up the gcloud client</summary>

    1. Download the [linked installer]((https://cloud.google.com/sdk/docs/install))
    2. Set the location of your Python installation (e.g. ~/.zshrc)
        ```bash
        export CLOUDSDK_PYTHON=/opt/homebrew/bin/python3
        ```
    3. Run the install script
        ```bash
        ./google-cloud-sdk/install.sh
        ```
    4. Resource your rc
        ```bash
        source ~/.zshrc
        ```
    5. Initialise the SDK
      - If this step doesn't work, check your $PATH
      - This step will ask you to set the project all commands relate to, create one using the SDK or Dashboard
        ```bash
        gcloud init
        ```

    </details>

### Steps to run the app

1. Install the apps dependencies: `npm i`
2. Launch the developer environment: `npm run dev`
3. You can now make requests to the app on http://localhost:8080

### Available Methods

#### `GET`

Returns the docs for the func.live function

#### `POST`:

Accepts: An object containing a `hexString` representing the colour, and an `opacity` value to set the opacity level.

Returns: The enhanced Alpha Hex Colour Code, incorporating the specified opacity into the original colour

Example curl request:

```bash
curl 'localhost:8080' \
-X POST \
--header 'Content-Type: application/json' \
--data '{
  "input": {
    "hexString": "#42cef5",
    "opacity": 50
  }
}'
```

### Google Cloud Deployment

Follow these steps to deploy the http function to Google Cloud using the cloud account you're currently authenticated and configured with.

1. Copy the [.env.sample](./.env.sample) file and populate the `REGION` variable with your desired [cloud region](https://cloud.google.com/run/docs/locations)
   ```bash
   cp .env.sample .env
   ```
3. Run the deploy script `npm run deploy`

The http function will be created and the URL for the resource will be shown in the terminal.

You can view the Cloud Run Function in the Google Console:

  - https://console.cloud.google.com/home/dashboard

#### Running Tests

```bash
npm run test
```
