import { jsPDF } from 'jspdf';
import type { Report } from '../types';

export const generatePDF = (report: Report) => {
  const doc = new jsPDF();
  
  // Title
  doc.setFontSize(20);
  doc.text('Personality Assessment Report', 20, 20);
  
  // Personality Type
  doc.setFontSize(16);
  doc.text('Personality Type:', 20, 40);
  doc.setFontSize(12);
  doc.text(report.personalityType, 20, 50);
  
  // Strengths
  doc.setFontSize(16);
  doc.text('Key Strengths:', 20, 70);
  doc.setFontSize(12);
  report.strengths.forEach((strength, index) => {
    doc.text(`• ${strength}`, 20, 80 + (index * 10));
  });
  
  // Areas for Growth
  doc.setFontSize(16);
  doc.text('Areas for Growth:', 20, 120);
  doc.setFontSize(12);
  report.areas_for_growth.forEach((area, index) => {
    doc.text(`• ${area}`, 20, 130 + (index * 10));
  });
  
  // Recommendations
  doc.setFontSize(16);
  doc.text('Recommendations:', 20, 170);
  doc.setFontSize(12);
  report.recommendations.forEach((rec, index) => {
    doc.text(`• ${rec}`, 20, 180 + (index * 10));
  });
  
  // Save the PDF
  doc.save('personality-assessment-report.pdf');
};