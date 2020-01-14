module.exports = {
  name: 'iwi',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/iwi',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
