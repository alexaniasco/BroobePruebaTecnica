import { useState } from "react";
import axios from "axios";

const API_KEY = "AIzaSyDCrPAzhzWxZbJxPYIEURODTvBFVVRNHbY";

export const usePageSpeed = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [strategy, setStrategy] = useState("DESKTOP");
  const [isChecked, setIsChecked] = useState({
    accessibility: true,
    bestPractices: true,
    performance: true,
    seo: true,
  });

  const handleAnalyze = async () => {
    setData(null);
    setLoading(true);
    const categories = Object.keys(isChecked)
      .filter((key) => isChecked[key])
      .map((key) => key.toUpperCase())
      .join("&category=");

    const requestUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url}&key=${API_KEY}&category=${categories}&strategy=${strategy}`;

    let isMounted = true;

    try {
      const response = await axios.get(requestUrl);
      if (isMounted) {
        const scores = {
          accessibility:
            response.data?.lighthouseResult?.categories?.accessibility?.score ||
            0,
          performance:
            response.data?.lighthouseResult?.categories?.performance?.score ||
            0,
          bestPractices:
            response.data?.lighthouseResult?.categories?.["best-practices"]
              ?.score || 0,
          seo: response.data?.lighthouseResult?.categories?.seo?.score || 0,
        };

        setData({
          ...response.data,
          chartData: [
            scores.accessibility,
            scores.bestPractices,
            scores.performance,
            scores.seo,
          ],
        });
      }
    } catch (error) {
      if (isMounted) {
        console.log(error);
        setError(error);
      }
    } finally {
      if (isMounted) {
        setLoading(false);
      }
    }

    return () => {
      isMounted = false;
    };
  };

  return {
    url,
    setUrl,
    loading,
    setLoading,
    data,
    error,
    strategy,
    setStrategy,
    isChecked,
    setIsChecked,
    handleAnalyze,
  };
};
