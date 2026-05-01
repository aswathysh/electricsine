import { useQuery } from '@tanstack/react-query';
import { fetchExamQuestions, fetchExamSections, fetchPracticeQuestions,fetchSampleQuestions, fetchPurchasedSubjectList, fetchSubjectList } from './PracticeServices';

export const usePracticeQuestions = ({pageParam,subjectId}) => {
  return useQuery({ queryKey: ['questions', subjectId, pageParam], queryFn: () =>  fetchPracticeQuestions({pageParam,subjectId}) });
};

export const useSubjects = () => {
  return useQuery({ queryKey: ['subjects'], queryFn: fetchSubjectList });
};

export const usePurchasedSubjects = () => {
  return useQuery({ queryKey: ['purchased-subjects'], queryFn: fetchPurchasedSubjectList });
};


//exam
export const useExamSections = ({subjectId}) => {
  return useQuery({ queryKey: ['exam', subjectId], queryFn: () =>  fetchExamSections({subjectId}) });
};
export const useExamQuestions = ({examId}) => {
  return useQuery({ queryKey: ['exam', examId], queryFn: () =>  fetchExamQuestions({examId}) });
};
export const useSampleQuestionSections = ({subjectId}) => {
  return useQuery({ queryKey: ['sample', subjectId], queryFn: () =>  fetchSampleQuestions({subjectId}) });
};
// export const useSaveExamAnswerBatch = ({examId}) => {
//   return useQuery({ queryKey: ['examanswer', examId], queryFn: () =>  fetchExamQuestions({examId}) });
// };

