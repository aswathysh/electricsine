"use client"
import axiosInstance from "./Api";

export const fetchPracticeQuestions = async ({ pageParam,subjectId }) => {
    const response = await axiosInstance.get(`practice-questions/${subjectId}?page=${pageParam}`);
    return response.data;
  };
 
  export const fetchSubjectList = async () => {
    const response = await axiosInstance.get(`subjects`);
    return response.data;
  };
  
  export const fetchPurchasedSubjectList = async () => {
    const response = await axiosInstance.get(`subjects-purchased`);
    return response.data;
  };
  export const postPracticeAnswers = async (data) => {
    const response = await axiosInstance.post(`save-practice-progress`,data);
    return response.data;
  };
  export const fetchExamQuestions = async ({ examId }) => {
    const response = await axiosInstance.get(`exam-list-questions/${examId}`);
    return response.data;
  };
  export const fetchExamSections = async ({ subjectId }) => {
    const response = await axiosInstance.get(`exam-list/${subjectId}`);
    return response.data;
  };


  export const fetchSampleQuestions = async ({ subjectId }) => {
    const response = await axiosInstance.get(`sample-demo-questions/${subjectId}`);
    return response.data;
  };


  
  export const postExamAnswers = async (data) => {
    const response = await axiosInstance.post(`save-batch-answer`,data);
    return response.data;
  };
  export const getUserScore = async (data) => {
    const response = await axiosInstance.post(`exam-score`,data);
    return response.data;
  };
  // export const fetchExamSectionsParams = async () => {
  //   const subjectId = sessionStorage.getItem("elec_exam_id")
  //   const response = await axiosInstance.get(`https://electricsign.in/public/api/exam-list/${subjectId}`);
  //   return response.data;
  // };
  // File: services/PracticeServices.js

// Define the fetchExamSectionsParams function
export async function fetchExamSectionsParam() {
  // Fetch data or return some static data
  // This is just an example; replace with actual data fetching logic
  const subjectId = sessionStorage.getItem("elec_exam_id")

  const response = await fetch(`https://electricsign.in/public/api/exam-list/${subjectId}`);
  const data = await response.json();
  return data;
}
export async function fetchExamSectionsParams() {
  try {
    const response = await fetch('https://electricsign.in/public/api/exam-list/1');
    
    // Check if the response is OK
    if (!response.ok) {
      throw new Error(`Error fetching exam data: ${response.statusText}`);
    }

    // Check if the response is JSON
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      throw new Error('Received non-JSON response from API');
    }

    // Parse the JSON response
    const data = await response.json();
    
    // Check if the data has the expected structure
    if (!data || !data.exam_ids) {
      throw new Error('Unexpected data structure');
    }

    return data;
    
  } catch (error) {
    console.error('Failed to fetch exam sections:', error.message);
    return { exam_ids: [] }; // Return a fallback empty array to avoid breaking the build
  }
}