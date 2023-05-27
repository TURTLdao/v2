import { useState } from 'react';
import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon';
import { Card, InputAdornment, OutlinedInput, SvgIcon } from '@mui/material';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const LaunchpadSearch = ({ companies, setFilteredCompanies }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const matchingCompanies = companies.filter((company) =>
      company.title.toLowerCase().includes(query)
    );
    setFilteredCompanies(matchingCompanies);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#4CAF50"
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
    <Card sx={{ p: 2, backgroundColor: 'transparent' }}>
      <OutlinedInput
        defaultValue=""
        fullWidth

        placeholder="Search Project..."
        startAdornment={(
          <InputAdornment position="start">
            <SvgIcon fontSize="small" sx={{ color: 'white' }}>
              <MagnifyingGlassIcon />
            </SvgIcon>
          </InputAdornment>
        )}
        value={searchQuery}
        onChange={handleSearchInputChange}
        sx={{ maxWidth: "100%", input: { color: 'white' }, border: '1px solid #4CAF50'}}
      />
    </Card>
    </ThemeProvider>
  );
};

export default LaunchpadSearch;
