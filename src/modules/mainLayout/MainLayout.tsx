import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { setAccessToken } from "../../services/http.service";
import mainLayoutRoutes from "./mainLayout.routes";

const MainLayout = () => {
  useEffect(() => {
    setAccessToken(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmIwMmM4MDE3YjgzNDVkYjRjMzJjOGEiLCJmaXJlYmFzZVRva2VuIjoiZXlKaGJHY2lPaUpTVXpJMU5pSXNJbXRwWkNJNklqTmxOVFF5TjJOa016VXhNRGhpTkRjMk5qVXlNRGhsWVRBMFlqaGpZVFpqT0Raa01EbGpPVE1pTENKMGVYQWlPaUpLVjFRaWZRLmV5SnBjM01pT2lKb2RIUndjem92TDNObFkzVnlaWFJ2YTJWdUxtZHZiMmRzWlM1amIyMHZiR2Q0Y0hKdmFtVmpkQzB5TjJVeFpDSXNJbUYxWkNJNklteG5lSEJ5YjJwbFkzUXRNamRsTVdRaUxDSmhkWFJvWDNScGJXVWlPakUyTURVNU56TTJNamdzSW5WelpYSmZhV1FpT2lKc1NFeGlZbnBIVkhWbVkwTmljakV6UjFrMVVVaGFTVXg1YXpReUlpd2ljM1ZpSWpvaWJFaE1ZbUo2UjFSMVptTkRZbkl4TTBkWk5WRklXa2xNZVdzME1pSXNJbWxoZENJNk1UWXdOVGszTXpZeU9Dd2laWGh3SWpveE5qQTFPVGMzTWpJNExDSmxiV0ZwYkNJNklteDFhWE5uWVdKeWFXVnNMbUZqWlVCbmJXRnBiQzVqYjIwaUxDSmxiV0ZwYkY5MlpYSnBabWxsWkNJNlptRnNjMlVzSW1acGNtVmlZWE5sSWpwN0ltbGtaVzUwYVhScFpYTWlPbnNpWlcxaGFXd2lPbHNpYkhWcGMyZGhZbkpwWld3dVlXTmxRR2R0WVdsc0xtTnZiU0pkZlN3aWMybG5ibDlwYmw5d2NtOTJhV1JsY2lJNkluQmhjM04zYjNKa0luMTkuTmJPbzJzMTNDM2x1UzdnaWZuVm1vQmZEcHZQQnVPeTY4dDRIZERjQXU4N1Y1ODVPRGo5UE95Wk9vUFh6OGdaLWJweTVYaVQ5ZndDdm5pSlIxUVl0d2xRcEV2eU9XejJfbEd0WkpDNTREVU9TS3g5OHlxTzExbWNyUjZMaW9ESUZRZWxfbkYzZ005OTZ5aGJVdGE0Wmd5Q0hDRjFmQl85em1sdldtc2VsNVR1cGk4RVBZUkxfX0tuS2FYUnhBM3BuWHB2WGdwMkZ5UmRGdlhjTk9hMHd2VXBNYlpSZE45am5WQmRXN0UxUXR0QjJIQmV5ZVk2UXdlWWhCSldHS0tOcEU3elJMcVZ2b2d1bDZPTThDV29QVnJTYV9YblF0dDgtOWczYUVrRE9rMFlZMkYxMmJvQ2ZnQnZtV052b1BtSnFDRFRYNkczX1Fhc3NFNi1hc2FvZGpBIiwiZmlyc3ROYW1lIjoiTHVpcyBnYWJyaWVsIiwibGFzdE5hbWUiOiJBY2V2ZWRvIFJhbWlyZXoiLCJlbWFpbCI6Imx1aXNnYWJyaWVsLmFjZUBnbWFpbC5jb20iLCJhcHBSb2xlIjoiQURNSU4iLCJyb2xlIjpudWxsLCJjb21wYW55IjpudWxsLCJwcm9maWxlSW1hZ2UiOm51bGwsImlhdCI6MTYwNTk3MzYyOCwiZXhwIjoxOTY1OTczNjI4fQ.A4MG6CfsP29_0Z1bRxu4giQ3M3rMsFDmOiiVR6NJZYw"
    );
  }, []);
  return (
    <React.Suspense fallback={<div>Loading</div>}>
      <Switch>
        {mainLayoutRoutes.map((route, i) => (
          <Route key={i} {...route} />
        ))}
      </Switch>
    </React.Suspense>
  );
};

export default MainLayout;
