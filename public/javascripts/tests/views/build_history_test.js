describe('The build history tab', function() {
  beforeEach(function() {
    go_to('#!/repositories/' +  + INIT_DATA.repositories[1].id + '/history');
  });

  it('shows build details', function() {
    runs_after(200, function() {
      expect_texts('#right .repository', {
        'h3': 'josevalim/enginex',
        '.summary .number': '1',
        '.summary .commit-hash': '565294c',
        '.summary .commit-message': 'Update Capybara',
        '.summary .duration': '20 seconds',
        '.log': 'enginex build 1 log ...'
      });
    });
  });

  it('shows a builds list', function() {
    runs_after(200, function() {
      expect_table('#right #builds', [
        ['Build', 'Duration',   'Finished'],
        ['#1',    '20 seconds', '2010-11-11T12:00:20Z' ]
      ]);
    });
  });
});


