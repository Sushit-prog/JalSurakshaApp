'use client';

import * as React from 'react';
import { Languages } from 'lucide-react';
import { useI18n } from '@/context/I18nContext';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function LanguageToggle() {
  const { setLanguage } = useI18n();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Languages className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage('en')}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage('as')}>
          Assamese
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage('bn')}>
          Bengali
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage('brx')}>
          Bodo
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
