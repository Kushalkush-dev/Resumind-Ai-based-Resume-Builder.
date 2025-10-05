import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Simple HTML to Text converter with basic formatting
const parseHtmlToText = (html) => {
  if (!html) return '';
  
  let text = html;
  
  // Replace HTML entities
  text = text.replace(/&nbsp;/g, ' ');
  text = text.replace(/&amp;/g, '&');
  text = text.replace(/&lt;/g, '<');
  text = text.replace(/&gt;/g, '>');
  text = text.replace(/&quot;/g, '"');
  text = text.replace(/&#39;/g, "'");
  
  // Convert lists to bullet points
  text = text.replace(/<li[^>]*>/gi, '\n• ');
  text = text.replace(/<\/li>/gi, '');
  
  // Handle ordered lists - convert to numbers
  let olCounter = 1;
  text = text.replace(/<ol[^>]*>(.*?)<\/ol>/gis, (match, content) => {
    olCounter = 1;
    return content.replace(/<li[^>]*>/gi, () => `\n${olCounter++}. `);
  });
  
  // Clean up list tags
  text = text.replace(/<\/?ul[^>]*>/gi, '\n');
  text = text.replace(/<\/?ol[^>]*>/gi, '\n');
  
  // Handle breaks and paragraphs
  text = text.replace(/<br\s*\/?>/gi, '\n');
  text = text.replace(/<\/p>/gi, '\n\n');
  text = text.replace(/<p[^>]*>/gi, '');
  
  // Remove all HTML tags
  text = text.replace(/<[^>]*>/g, '');
  
  // Clean up whitespace
  text = text.replace(/\n\s*\n\s*\n/g, '\n\n');
  text = text.trim();
  
  return text;
};

const DefaultResume = ({ resumeInfo }) => {
  const styles = StyleSheet.create({
    page: {
      backgroundColor: '#fff',
      fontSize: 10,
      fontFamily: 'Helvetica',
      lineHeight: 1.3
    },
    container: {
      borderTopWidth: 15,
      borderColor: resumeInfo?.themeColor || '#000',
      padding: 16
    },
    name: {
      textAlign: 'center',
      fontSize: 17,
      fontWeight: 500,
      marginBottom: 3,
      paddingTop: 6
    
    },
    title: {
      textAlign: 'center',
      fontSize: 10,
      marginBottom: 2,
      marginTop:6
    },
    address: {
      textAlign: 'center',
      fontSize: 9,
      marginBottom: 5
    },
    contactRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 6
    },
    sectionTitle: {
      fontSize: 12,
      fontWeight: 600,
      textAlign: 'center',
      marginTop: 6,
      marginBottom: 4,
      borderBottomWidth: 2,
      paddingBottom: 2
    },
    summary: {
      fontSize: 9,
      textAlign: 'justify',
      marginBottom: 8,
      marginTop: 2,
      paddingTop: 6,
      borderTopWidth: 2,
      lineHeight: 1.4
    },
    expItem: { 
      marginBottom: 6,
      paddingBottom: 2
    },
    expHeader: { 
      flexDirection: 'row', 
      justifyContent: 'space-between',
      marginBottom: 2
    },
    expRole: { 
      fontSize: 10, 
      fontWeight: 'bold', 
      paddingBottom: 2
    },
    expCompany: { 
      fontSize: 8,
      paddingBottom: 1
    },
    expDates: { 
      fontSize: 8,
      paddingBottom: 1
    },
    expDesc: { 
      fontSize: 9, 
      textAlign: 'justify', 
      marginTop: 2,
      paddingBottom: 2,
      lineHeight: 1.4
    },
    eduItem: { 
      marginBottom: 6,
      paddingBottom: 2
    },
    eduSchool: { 
      fontSize: 10, 
      fontWeight: 'bold',
      paddingBottom: 2,
      marginBottom: 1
    },
    eduDegree: { 
      fontSize: 8,
      paddingBottom: 1
    },
    eduDates: { 
      fontSize: 8,
      paddingBottom: 1
    }
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.container}>
          <Text style={styles.name}>
            {resumeInfo?.firstName} {resumeInfo?.lastName}
          </Text>
          <Text style={styles.title}>{resumeInfo?.jobTitle}</Text>
          <Text style={styles.address}>{resumeInfo?.address}</Text>

          <View style={styles.contactRow}>
            <Text>{resumeInfo?.phone}</Text>
            <Text>{resumeInfo?.email}</Text>
          </View>

          <Text style={[styles.summary, { borderTopColor: resumeInfo?.themeColor || '#000' }]}>
            {parseHtmlToText(resumeInfo?.summary)}
          </Text>

          {/* Experience */}
          <Text style={[styles.sectionTitle, { borderBottomColor: resumeInfo?.themeColor || '#000' }]}>
            Experience
          </Text>
          {resumeInfo?.experience?.map((exp, i) => (
            <View key={i} style={styles.expItem}>
              <Text style={styles.expRole}>{exp?.title}</Text>
              <View style={styles.expHeader}>
                <Text style={styles.expCompany}>
                  {exp?.companyName}, {exp?.city}, {exp?.state}
                </Text>
                <Text style={styles.expDates}>
                  {exp?.startDate} - {exp?.endDate || 'Present'}
                </Text>
              </View>
              <Text style={styles.expDesc}>
                {parseHtmlToText(exp?.workSummary)}
              </Text>
            </View>
          ))}


          {/* Education */}
          <Text style={[styles.sectionTitle, { borderBottomColor: resumeInfo?.themeColor || '#000' }]}>
            Education
          </Text>
          {resumeInfo?.education?.map((ed, i) => (
            <View key={i} style={styles.eduItem}>
              <Text style={styles.eduSchool}>{ed?.universityName}</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 2 }}>
                <Text style={styles.eduDegree}>{ed?.degree} in {ed?.major}</Text>
                <Text style={styles.eduDates}>{ed?.startDate} - {ed?.endDate}</Text>
              </View>
              <Text style={styles.expDesc}>
                {parseHtmlToText(ed?.description)}
              </Text>
            </View>
          ))}

          {/* Skills */}
          <View>
            <Text style={[styles.sectionTitle, { borderBottomColor: resumeInfo?.themeColor || '#000' }]}>
              Skills
            </Text>
            
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 2 }}>
              {resumeInfo?.skills?.map((s, i) => (
                <View 
                  key={i} 
                  style={{ 
                    width: '50%',
                    flexDirection: 'row', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    paddingRight: 10,
                    marginBottom: 5
                  }}
                >
                  <Text style={{ fontSize: 10, marginRight: 6 }}>{s?.name}</Text>
                  <View style={{ 
                    flex: 1, 
                    height: 6, 
                    maxWidth: 70, 
                    backgroundColor: '#ddd', 
                    borderRadius: 3, 
                    overflow: 'hidden' 
                  }}>
                    <View style={{
                      width: `${(s?.rating || 0) * 20}%`,
                      height: '100%',
                      backgroundColor: resumeInfo?.themeColor || '#000',
                      borderRadius: 3
                    }} />
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default DefaultResume;