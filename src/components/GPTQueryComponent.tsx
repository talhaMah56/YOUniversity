import React, { useState } from 'react';
import axios from 'axios';

interface FailedGptResponse {
  success: false;
  finish_reason: string;
}

interface SuccessfulGptResponse {
  success: true;
  message: string;
}

type GptResponse = FailedGptResponse | SuccessfulGptResponse;

const GPTQueryComponent: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const runGPTQuery = async (query: string): Promise<GptResponse> => {
    setLoading(true);
    try {
      const { data } = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: query }],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer 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`, //'go buy it yourself dumbass'//`Bearer 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`, // Use environment variable or secure storage
          },
        }
      );

      const result = data.choices[0];

      if (result.finish_reason !== 'stop') {
        return {
          success: false,
          finish_reason: result.finish_reason,
        };
      }

      return {
        success: true,
        message: result.message.content,
      };
    } catch (error) {
      console.error('Failed to fetch GPT response', error);
      return {
        success: false,
        finish_reason: 'network_error',
      };
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const gptResult = await runGPTQuery(query);
    if (gptResult.success === true) {
      setResponse(`GPT response: ${gptResult.message}`);
    } else {
      setResponse(`Failed with finish_reason: ${gptResult.finish_reason}`);
    }
  };

  return (
       <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter your query for GPT"
        />
        <button type="submit" disabled={loading}>
          Submit
        </button>
      </form>
      <div style={{ color: 'black'}}>
              {response && <p >{response}</p>}
      </div>
    </div>
  );
};

export default GPTQueryComponent;
