import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const DefaultResume = ({ resumeInfo }) => {
  const styles = StyleSheet.create({
    page: {
      backgroundColor: '#fff',
      fontSize: 10,
      fontFamily: 'Helvetica'
    },
    container: {
      borderTopWidth: 20,
      borderColor: resumeInfo.themeColor,
      padding: 16
    },
    name: {
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold'
    },
    title: {
      textAlign: 'center',
      fontSize: 10
    },
    address: {
      textAlign: 'center',
      fontSize: 9,
      marginBottom: 6
    },
    contactRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 6
    },
    sectionTitle: {
      fontSize: 12,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 6,
      marginBottom: 4,
      borderBottomWidth: 2
    },
    summary: {
      fontSize: 9,
      textAlign: 'justify',
      marginBottom: 8,
      marginTop: 6,
      paddingTop: 6,

      borderTopWidth: 2

    },
    expItem: { marginBottom: 6 },
    expHeader: { flexDirection: 'row', justifyContent: 'space-between' },
    expRole: { fontSize: 10, fontWeight: 'bold' },
    expCompany: { fontSize: 8 },
    expDates: { fontSize: 8 },
    expDesc: { fontSize: 9, textAlign: 'justify', marginTop: 3 },
    eduItem: { marginBottom: 6 },
    eduSchool: { fontSize: 10, fontWeight: 'bold' },
    eduDegree: { fontSize: 8 },
    eduDates: { fontSize: 8 },
    skillsWrap: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 6
    },
    skillItem: {
      width: '50%',
      paddingRight: 8,
      marginBottom: 6,
      flexDirection:'row',
      justifyContent:'space-between',

    },
    skillLabel: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      fontSize: 9
    },
    skillBar: {
      height: 6,
      backgroundColor: '#ddd',
      borderRadius: 3,
      overflow: 'hidden',
      marginTop: 2
    },
    skillFill: (rating, color) => ({
      width: `${rating * 20}%`,
      height: '100%',
      backgroundColor: color
    })
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.container}>
          <Text style={styles.name}>{resumeInfo.firstName} {resumeInfo.lastName}</Text>
          <Text style={styles.title}>{resumeInfo.jobTitle}</Text>
          <Text style={styles.address}>{resumeInfo.address}</Text>

          <View style={styles.contactRow}>
            <Text>{resumeInfo.phone}</Text>
            <Text>{resumeInfo.email}</Text>
          </View>

          <Text style={[styles.summary, { borderTopColor: resumeInfo.themeColor }]}>{resumeInfo.summary}</Text>


          {/* Experience */}
          <Text style={[styles.sectionTitle, { borderBottomColor: resumeInfo.themeColor }]}>Experience</Text>
          {resumeInfo?.experience?.map((exp, i) => (
            <View key={i} style={styles.expItem}>
              <View style={styles.expHeader}>
                <View>
                  <Text style={styles.expRole}>{exp.title}</Text>
                  <Text style={styles.expCompany}>
                    {exp.companyName}, {exp.city}, {exp.state}
                  </Text>
                </View>
                <Text style={styles.expDates}>
                  {exp.startDate} - {exp.endDate || 'Present'}
                </Text>
              </View>
              <Text style={styles.expDesc}>{exp.workSummary}</Text>
            </View>
          ))}

          {/* Education */}
          <Text style={[styles.sectionTitle, { borderBottomColor: resumeInfo.themeColor }]}>Education</Text>
          {resumeInfo?.education?.map((ed, i) => (
            <View key={i} style={styles.eduItem}>
              <Text style={styles.eduSchool}>{ed.universityName}</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.eduDegree}>{ed.degree} in {ed.major}</Text>
                <Text style={styles.eduDates}>{ed.startDate} - {ed.endDate}</Text>
              </View>
              <Text style={styles.expDesc}>{ed.description}</Text>
            </View>
          ))}
 {/* Skills */}
<View>
  <Text style={[styles.sectionTitle, { borderBottomColor: resumeInfo.themeColor }]}>Skills</Text>
  
  {/* Wrap all skills */}
  <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
    {resumeInfo?.skills?.map((s, i) => (
      <View 
        key={i} 
        style={{ 
          width: '50%',                // 2 per row
          flexDirection: 'row', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          paddingRight: 8,
          marginBottom: 6
        }}
      >
        <Text style={{ fontSize: 10, marginRight: 6 }}>{s.name}</Text>
        <View style={{ flex: 1, height: 6, maxWidth:70, backgroundColor: '#ddd', borderRadius: 3, overflow: 'hidden' }}>
          <View style={{
            width: `${s.rating * 20}%`,
            height: '100%',
            backgroundColor: resumeInfo.themeColor,
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
