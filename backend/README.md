# Event Countdown Planner - Python Backend

This is a command-line interface (CLI) application to manage events in iCalendar (`.ics`) format, fully compatible with Google Calendar and other calendar applications.

It allows you to create multiple calendars, and then add, list, and delete events within them. All data is stored locally in `.ics` files inside the `calendars/` directory.

## Requirements

- Python 3.6 or newer
- Required packages are listed in `requirements.txt`.

## How to Run

1.  **Navigate to this directory:**
    Open your terminal or command prompt and change your directory to `backend`.

    ```sh
    cd backend
    ```

2.  **Install dependencies:**
    Run the following command to install the required `ics` library.

    ```sh
    pip install -r requirements.txt
    ```

3.  **Run the script:**
    Execute the `main.py.txt` script using Python.

    ```sh
    python main.py.txt
    ```

4.  **Follow the on-screen menu:**
    The application will guide you to select or create a calendar, and then you can manage events within it.

## How it Works

-   **`main.py.txt`**: The main Python script that contains all the application logic.
-   **`calendars/`**: This directory will be created automatically. It stores all your calendars as separate `.ics` files (e.g., `work.ics`, `personal.ics`). These files can be directly imported into Google Calendar.
-   **`requirements.txt`**: Specifies the `ics` package dependency.
