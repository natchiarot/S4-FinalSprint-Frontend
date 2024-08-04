import React, { useEffect, useState } from 'react';

const HTMLPage = ({ filePath }) => {
    const [htmlContent, setHtmlContent] = useState('');
    useEffect(() => {
        fetch(filePath)
            .then(response => response.text())
            .then(data => setHtmlContent(data))
            .catch(error => console.log('Error fetching HTML:', error));
    }, [filePath]);
    return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default HTMLPage;