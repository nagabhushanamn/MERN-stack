<?php
  header('Content-Type: text/event-stream');
  header('Cache-Control: no-cache');

  // Tell the browser to wait two minutes before reconnecting,
  // when the connection is closed.
  echo 'retry: 120000' . PHP_EOL;

  // Turn off output buffering, so messages are sent
  // to the browser immediately.
  ob_end_clean();

  // Store the start time.
  $startTime = time();

  do {
    // Send a message.
    $currentTime = date('h:i:s', time());
    echo 'data: ' . $currentTime . PHP_EOL;
    echo PHP_EOL;

    flush();

    // If a minute has passed, end this script.
    if ((time() - $startTime) > 60) {
      die();
    }

    // Wait 5 seconds, and send a new message.
    sleep(5);
  } while(true);
?>
