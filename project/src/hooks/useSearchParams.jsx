import { useCallback, useEffect, useState } from 'react';
import { useSearchParams as useSearchParamsOriginal } from 'react-router-dom';

export const useSearchParams = () => {
  const [searchParamsOriginal, setSearchParamsOriginal] =
    useSearchParamsOriginal();
  const [searchParams, setSearchParams] = useState({});
  useEffect(() => {
    setSearchParams(Object.fromEntries(searchParamsOriginal.entries()));
  }, [searchParamsOriginal]);

  return [
    searchParams,
    useCallback(
      (obj) => {
        setSearchParamsOriginal((prev) => {
          return {
            ...Object.fromEntries(prev.entries()),
            ...obj,
          };
        });
      },
      [setSearchParamsOriginal]
    ),
  ];
};
