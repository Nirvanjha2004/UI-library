import { Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import Editor from '@monaco-editor/react';
import { useState, useCallback } from 'react';
import { styled } from '@mui/material/styles';
import { LiveProvider, LiveError, LivePreview } from 'react-live';
import PropTypes from 'prop-types';

const PreviewContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
}));

const ErrorContainer = styled(Box)(({ theme }) => ({
  color: theme.palette.error.main,
  padding: theme.spacing(2),
  marginTop: theme.spacing(2),
  backgroundColor: theme.palette.error.light,
  borderRadius: theme.shape.borderRadius,
}));

const LiveCodeEditor = ({ 
  initialCode, 
  scope,
  language = "jsx",
}) => {
  const [code, setCode] = useState(initialCode);

  const handleCodeChange = useCallback((value) => {
    setCode(value);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <LiveProvider
        code={code}
        scope={scope}
        noInline={false}
      >
        <PreviewContainer elevation={2}>
          <LivePreview />
        </PreviewContainer>

        <Paper elevation={3} sx={{ mb: 2 }}>
          <Editor
            height="300px"
            defaultLanguage={language}
            value={code}
            onChange={handleCodeChange}
            theme="vs-dark"
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              lineNumbers: 'on',
              scrollBeyondLastLine: false,
              automaticLayout: true,
              tabSize: 2,
            }}
          />
        </Paper>

        <ErrorContainer>
          <LiveError />
        </ErrorContainer>
      </LiveProvider>
    </motion.div>
  );
};

LiveCodeEditor.propTypes = {
  initialCode: PropTypes.string.isRequired,
  scope: PropTypes.object.isRequired,
  language: PropTypes.string,
};

export default LiveCodeEditor; 