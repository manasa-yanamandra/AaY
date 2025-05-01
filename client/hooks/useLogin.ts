// import {
//   useQuery,
//   useMutation,
//   useQueryClient,
//   MutationFunction,
// } from '@tanstack/react-query'
// import { getLogin } from '../apis/api.ts'

// export function useLogin() {
//   const query = useQuery({ queryKey: ['login'], queryFn: getLogin })
//   return {
//     ...query,
//   }
// }

// export function useFruitsMutation<TData = unknown, TVariables = unknown>(
//   mutationFn: MutationFunction<TData, TVariables>,
// ) {
//   const queryClient = useQueryClient()
//   const mutation = useMutation({
//     mutationFn,
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['login'] })
//     },
//   })

//   return mutation
// }
