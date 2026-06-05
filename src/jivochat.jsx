
import React, { useEffect, useState } from 'react';

const JivoChat = ({
  widgetId = 'YOUR_WIDGET_ID', // Replace with your actual widget ID
  language = 'en',
  triggerOnLoad = true,
  autoOpen = false,
  autoOpenDelay = 5000
}) => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    // Load JivoChat script dynamically
    const loadJivoChat = () => {
      // Check if script is already loaded
      if (document.querySelector('script[src*="jivosite.com/widget"]')) {
        setIsScriptLoaded(true);
        return;
      }

      const script = document.createElement('script');
      script.src = `//code.jivosite.com/widget/${widgetId}`;
      script.async = true;

      script.onload = () => {
        setIsScriptLoaded(true);

        // Auto-open chat after delay if enabled
        if (autoOpen && window.jivo_api) {
          setTimeout(() => {
            window.jivo_api.open();
            setIsChatOpen(true);
          }, autoOpenDelay);
        }
      };

      script.onerror = () => {
        console.error('Failed to load JivoChat widget');
      };

      document.body.appendChild(script);
    };

    loadJivoChat();

    // Cleanup on component unmount
    return () => {
      if (window.jivo_api) {
        window.jivo_api.close();
      }
    };
  }, [widgetId, autoOpen, autoOpenDelay]);

  // Function to manually open chat
  const openChat = () => {
    if (window.jivo_api) {
      window.jivo_api.open();
      setIsChatOpen(true);
    }
  };

  // Function to manually close chat
  const closeChat = () => {
    if (window.jivo_api) {
      window.jivo_api.close();
      setIsChatOpen(false);
    }
  };

  // Function to set user info
  const setUserInfo = (userData) => {
    if (window.jivo_api) {
      window.jivo_api.setUserInfo(userData);
    }
  };

  return null; // JivoChat renders its own widget, we don't need to render anything
};

// Hook to use JivoChat functions anywhere in your app
export const useJivoChat = () => {
  const [isAvailable, setIsAvailable] = useState(false);

  useEffect(() => {
    // Check if JivoChat API is available
    const checkAvailability = setInterval(() => {
      if (window.jivo_api) {
        setIsAvailable(true);
        clearInterval(checkAvailability);
      }
    }, 500);

    return () => clearInterval(checkAvailability);
  }, []);

  const openChat = () => {
    if (window.jivo_api) {
      window.jivo_api.open();
    }
  };

  const closeChat = () => {
    if (window.jivo_api) {
      window.jivo_api.close();
    }
  };

  const setUserInfo = (userData) => {
    if (window.jivo_api) {
      window.jivo_api.setUserInfo(userData);
    }
  };

  const sendMessage = (message) => {
    if (window.jivo_api) {
      window.jivo_api.sendMessage(message);
    }
  };

  return { isAvailable, openChat, closeChat, setUserInfo, sendMessage };
};

export default JivoChat;
