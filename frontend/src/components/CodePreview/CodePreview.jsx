import { Box, Paper, IconButton, Tooltip } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Highlight, themes } from 'prism-react-renderer';
import { motion } from 'framer-motion';
import { useState } from 'react';
import PropTypes from 'prop-types';

const CodePreview = ({ code, language = "jsx" }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Paper
        sx={{
          position: 'relative',
          mt: 2,
          mb: 4,
          overflow: 'hidden',
          backgroundColor: 'grey.900',
        }}
      >
        <Box sx={{ position: 'absolute', right: 8, top: 8 }}>
          <Tooltip title={copied ? "Copied!" : "Copy code"}>
            <IconButton onClick={handleCopy} sx={{ color: 'grey.400' }}>
              <ContentCopyIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Box sx={{ p: 2, overflow: 'auto' }}>
          <Highlight code={code.trim()} language={language} theme={themes.nightOwl}>
            {({ style, tokens, getLineProps, getTokenProps }) => (
              <pre style={{ ...style, background: 'transparent' }}>
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line })}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </Box>
      </Paper>
    </motion.div>
  );
};

CodePreview.propTypes = {
  code: PropTypes.string.isRequired,
  language: PropTypes.string
};

export default CodePreview;